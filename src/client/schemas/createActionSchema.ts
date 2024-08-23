export const createActionSchema = {
  type: 'void',
  'x-component': 'Action',
  title: 'Add New',
  'x-align': 'right',
  'x-component-props': {
    type: 'primary',
  },
  properties: {
    drawer: {
      type: 'void',
      'x-component': 'Action.Drawer',
      title: 'Add new',
      properties: {
        form: {
          type: 'void',
          'x-component': 'FormV2',
          properties: {
            title: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'CollectionField',
            },
            collection: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'CollectionField',
            },
            type: {
              type: 'string',
              'x-decorator': 'FormItem',
              title: 'Type',
              'x-component': 'Radio.Group',
              default: 'form',
              enum: '{{ formTypes }}',
            },
            description: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'CollectionField',
            },
            password: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'CollectionField',
            },
            enabled: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'CollectionField',
            },
            footer: {
              type: 'void',
              'x-component': 'Action.Drawer.Footer',
              properties: {
                submit: {
                  title: 'Submit',
                  'x-component': 'Action',
                  'x-use-component-props': 'useSubmitActionProps',
                },
              },
            },
          },
        },
      },
    },
  },
};
