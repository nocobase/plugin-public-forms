import { useForm } from '@formily/react';
import { useDataBlockResource } from '@nocobase/client';
import { App as AntdApp } from 'antd';

// TODO：这里暂时只实现了基本流程，更多参考内核 @nocobase/client 的 useCreateActionProps
export const usePublicSubmitActionProps = () => {
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
