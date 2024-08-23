export const publicFormsCollection = {
  name: 'publicForms',
  filterTargetKey: 'key',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        title: 'Title',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'text',
      name: 'description',
      interface: 'textarea',
      uiSchema: {
        type: 'string',
        title: 'Description',
        'x-component': 'Input.TextArea',
      },
    },
    {
      type: 'string',
      name: 'type',
      interface: 'radioGroup',
      uiSchema: {
        type: 'string',
        title: 'Type',
        'x-component': 'Radio.Group',
      },
    },
    {
      type: 'string',
      name: 'collection',
      interface: 'collection',
      uiSchema: {
        type: 'string',
        title: 'Collection',
        required: true,
        'x-component': 'CollectionSelect',
      },
    },
    {
      type: 'password',
      name: 'password',
      interface: 'password',
      uiSchema: {
        type: 'string',
        title: 'Password',
        'x-component': 'Password',
      },
    },
    {
      type: 'boolean',
      name: 'enabled',
      interface: 'checkbox',
      uiSchema: {
        type: 'string',
        title: 'Enable form',
        'x-component': 'Checkbox',
      },
    },
  ],
};
