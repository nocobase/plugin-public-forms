import { SchemaComponent, SchemaComponentProvider, useRequest } from '@nocobase/client';
import { Spin } from 'antd';
import React from 'react';
import { useParams } from 'react-router';

export function PublicSharedForm() {
  const params = useParams();
  const { data, loading } = useRequest<any>({
    url: `sharedForms:getMeta/${params.name}`,
  });
  if (loading) {
    return <Spin />;
  }
  return (
    <div>
      <SchemaComponentProvider designable={false}>
        <SchemaComponent schema={data?.data?.schema} />
      </SchemaComponentProvider>
    </div>
  );
}
