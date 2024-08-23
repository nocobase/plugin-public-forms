import { useForm } from '@formily/react';
import { uid } from '@formily/shared';
import {
  useActionContext,
  useAPIClient,
  useCollection,
  useDataBlockRequest,
  useDataBlockResource,
} from '@nocobase/client';
import { App as AntdApp } from 'antd';

const initialSchema = (values) => {
  const keys = values.collection.split('.');
  const collection = keys.pop();
  const dataSource = keys.pop() || 'main';
  return {
    type: 'void',
    name: uid(),
    properties: {
      form: {
        type: 'void',
        'x-toolbar': 'BlockSchemaToolbar',
        'x-toolbar-props': {
          draggable: false,
        },
        'x-settings': 'blockSettings:createForm',
        'x-component': 'CardItem',
        'x-decorator': 'FormBlockProvider',
        'x-decorator-props': {
          collection,
          dataSource,
        },
        'x-use-decorator-props': 'useCreateFormBlockDecoratorProps',
        properties: {
          a69vmspkv8h: {
            type: 'void',
            'x-component': 'FormV2',
            'x-use-component-props': 'useCreateFormBlockProps',
            properties: {
              grid: {
                type: 'void',
                'x-component': 'Grid',
                'x-initializer': 'form:configureFields',
              },
              l9xfwp6cfh1: {
                type: 'void',
                'x-component': 'ActionBar',
                'x-initializer': 'createForm:configureActions',
                'x-component-props': {
                  layout: 'one-column',
                },
              },
            },
          },
        },
      },
      success: {
        type: 'void',
        'x-editable': false,
        'x-toolbar-props': {
          draggable: false,
        },
        'x-settings': 'blockSettings:markdown',
        'x-component': 'Markdown.Void',
        'x-decorator': 'CardItem',
        'x-component-props': {
          content: '# Submitted Successfully\nThis is a demo text, **supports Markdown syntax**.',
        },
        'x-decorator-props': {
          name: 'markdown',
          engine: 'handlebars',
        },
      },
    },
  };
};

export const useSubmitActionProps = () => {
  const { setVisible } = useActionContext();
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();
  const collection = useCollection();
  const api = useAPIClient();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      if (values[collection.filterTargetKey]) {
        await resource.update({
          values,
          filterByTk: values[collection.filterTargetKey],
        });
      } else {
        const key = uid();
        const schema = initialSchema(values);
        schema['x-uid'] = key;
        await resource.create({
          values: {
            ...values,
            key,
          },
        });
        await api.resource('uiSchemas').insert({ values: schema });
      }
      await runAsync();
      message.success('Saved successfully!');
      setVisible(false);
    },
  };
};
