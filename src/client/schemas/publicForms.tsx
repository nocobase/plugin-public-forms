import { uid } from '@formily/shared';
import { ISchema } from '@nocobase/client';
import { publicFormsCollection } from '../collections';
import { ConfigureLink } from '../components/ConfigureLink';

export const publicFormsSchema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'TableBlockProvider',
  'x-decorator-props': {
    collection: publicFormsCollection.name,
    action: 'list',
    showIndex: true,
    dragSort: false,
  },
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 20,
        },
      },
      properties: {
        add: {
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
                      required: true,
                    },
                    collection: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                      required: true,
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
        },
      },
    },
    table: {
      type: 'array',
      'x-component': 'TableV2',
      'x-use-component-props': 'useTableBlockProps',
      'x-component-props': {
        rowKey: publicFormsCollection.filterTargetKey,
        rowSelection: {
          type: 'checkbox',
        },
      },
      properties: {
        title: {
          type: 'void',
          title: 'Title',
          'x-component': 'TableV2.Column',
          properties: {
            title: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        collection: {
          type: 'void',
          title: 'Collection',
          'x-component': 'TableV2.Column',
          properties: {
            collection: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        description: {
          type: 'void',
          title: 'Description',
          'x-component': 'TableV2.Column',
          properties: {
            description: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        column3: {
          type: 'void',
          title: 'Enabled',
          'x-component': 'TableV2.Column',
          properties: {
            enabled: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        actions: {
          type: 'void',
          title: 'Actions',
          'x-component': 'TableV2.Column',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'Space',
              'x-component-props': {
                split: '|',
              },
              properties: {
                configure: {
                  type: 'void',
                  title: 'Configure',
                  'x-component': ConfigureLink,
                  // 'x-use-component-props': 'useDeleteActionProps',
                },
                edit: {
                  type: 'void',
                  title: 'Edit',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    openMode: 'drawer',
                    icon: 'EditOutlined',
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      title: 'Edit',
                      'x-component': 'Action.Drawer',
                      properties: {
                        form: {
                          type: 'void',
                          'x-component': 'FormV2',
                          'x-use-component-props': 'useEditFormProps',
                          properties: {
                            title: {
                              type: 'string',
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
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
                },
                delete: {
                  type: 'void',
                  title: 'Delete',
                  'x-component': 'Action.Link',
                  'x-use-component-props': 'useDeleteActionProps',
                },
              },
            },
          },
        },
      },
    },
  },
};
