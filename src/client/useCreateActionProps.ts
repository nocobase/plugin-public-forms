import { useForm } from '@formily/react';
import { useDataBlockResource } from '@nocobase/client';
import { App as AntdApp } from 'antd';

export const useCreateActionProps = () => {
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.publicSubmit({
        values,
      });
      await form.reset();
      message.success('Saved successfully!');
    },
  };
};
