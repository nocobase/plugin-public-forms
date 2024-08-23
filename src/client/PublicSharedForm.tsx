import {
  APIClient,
  APIClientProvider,
  CollectionManager,
  DataSource,
  DataSourceApplicationProvider,
  DataSourceManager,
  SchemaComponent,
  SchemaComponentContext,
  useAPIClient,
  useApp,
  useRequest,
} from '@nocobase/client';
import { Input, Modal, Spin } from 'antd';
import React, { useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useCreateActionProps } from './useCreateActionProps';

class PublicDataSource extends DataSource {
  async getDataSource() {
    return {};
  }
}

function PublicSharedFormProvider(props) {
  const { dataSource } = props;
  const app = useApp();
  const [dataSourceManager, collectionManager] = useMemo(() => {
    const dataSourceManager = new DataSourceManager({}, app);
    const dataSourceInstance = dataSourceManager.addDataSource(PublicDataSource, dataSource);
    const collectionManager = new CollectionManager([], dataSourceInstance);
    return [dataSourceManager, collectionManager];
  }, [app, dataSource]);
  return (
    <div>
      <DataSourceApplicationProvider
        dataSource={dataSource.key}
        dataSourceManager={dataSourceManager}
        instance={collectionManager}
      >
        {props.children}
      </DataSourceApplicationProvider>
    </div>
  );
}

function PublicAPIClientProvider({ children }) {
  const app = useApp();
  const apiClient = useMemo(() => {
    const apiClient = new APIClient(app.getOptions().apiClient as any);
    apiClient.app = app;
    apiClient.axios.interceptors.request.use((config) => {
      config.headers['X-Form-Token'] = apiClient.storage.getItem('NOCOBASE_FORM_TOKEN') || '';
      return config;
    });
    return apiClient;
  }, [app]);
  return <APIClientProvider apiClient={apiClient}>{children}</APIClientProvider>;
}

function InternalSharedForm() {
  const params = useParams();
  const apiClient = useAPIClient();
  const { error, data, loading, run } = useRequest<any>(
    {
      url: `sharedForms:getMeta/${params.name}`,
    },
    {
      onSuccess(data) {
        apiClient.axios.interceptors.request.use((config) => {
          config.headers['X-Form-Token'] = data?.data?.token || '';
          return config;
        });
      },
    },
  );
  const [pwd, setPwd] = useState('');
  const ctx = useContext(SchemaComponentContext);
  if (error) {
    console.log(error);
    if (error?.['response']?.status === 401) {
      return (
        <div>
          <Modal
            centered
            title="Password"
            open={true}
            cancelButtonProps={{
              hidden: true,
            }}
            onOk={() => {
              run({
                password: pwd,
              });
            }}
          >
            <Input
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Modal>
        </div>
      );
    }
    return <div>Error</div>;
  }
  if (loading) {
    return <Spin />;
  }

  return (
    <div
      style={{
        height: '100vh',
        background: '#f5f5f5',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', paddingTop: '10vh' }}>
        <PublicSharedFormProvider dataSource={data?.data?.dataSource}>
          <SchemaComponentContext.Provider value={{ ...ctx, designable: false }}>
            <SchemaComponent schema={data?.data?.schema} scope={{ useCreateActionProps }} />
          </SchemaComponentContext.Provider>
        </PublicSharedFormProvider>
      </div>
    </div>
  );
}

export function PublicSharedForm() {
  return (
    <PublicAPIClientProvider>
      <InternalSharedForm />
    </PublicAPIClientProvider>
  );
}
