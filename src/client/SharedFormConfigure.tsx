import { EyeOutlined, SettingOutlined } from '@ant-design/icons';
import { RemoteSchemaComponent } from '@nocobase/client';
import { Breadcrumb, Button, Dropdown, Space, Switch } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useCreateActionProps } from './useCreateActionProps';

export function SharedFormConfigure() {
  const params = useParams();
  return (
    <div>
      <div
        style={{
          margin: '-24px',
          padding: '10px',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Breadcrumb
          items={[
            {
              title: <Link to={`/admin/settings/shared-forms`}>Shared forms</Link>,
            },
            {
              title: 'Test',
            },
          ]}
        />
        <Space>
          <Link target={'_blank'} to={`/shared-forms/${params.name}`}>
            <Button icon={<EyeOutlined />}>Open form</Button>
          </Link>
          <Dropdown
            menu={{
              items: [
                {
                  key: 'enabled',
                  label: (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Enable form</span> <Switch size={'small'} />
                    </span>
                  ),
                },
                {
                  key: 'password',
                  label: <span>Set password</span>,
                },
                {
                  key: 'divider1',
                  type: 'divider',
                },
                {
                  key: 'copyLink',
                  label: <span>Copy link</span>,
                },
                {
                  key: 'qrcode',
                  label: <span>Download QR code</span>,
                },
              ],
            }}
          >
            <Button icon={<SettingOutlined />}>Settings</Button>
          </Dropdown>
        </Space>
      </div>
      <div style={{ maxWidth: 800, margin: '100px auto' }}>
        <RemoteSchemaComponent uid={params.name} scope={{ useCreateActionProps }} />
      </div>
    </div>
  );
}
