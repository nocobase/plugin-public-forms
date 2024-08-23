import {
  CollectionManager,
  DataSource,
  DataSourceApplicationProvider,
  DataSourceManager,
  SchemaComponent,
  SchemaComponentContext,
  useApp,
  useRequest,
} from '@nocobase/client';
import { Spin } from 'antd';
import React, { useContext, useMemo } from 'react';
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

export function PublicSharedForm() {
  const params = useParams();
  const { data, loading } = useRequest<any>({
    url: `sharedForms:getMeta/${params.name}`,
  });
  const ctx = useContext(SchemaComponentContext);
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
