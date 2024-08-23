import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'sharedForms',
  filterTargetKey: 'slug',
  fields: [
    {
      type: 'uid',
      name: 'slug',
    },
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'string',
      name: 'collection',
    },
    {
      type: 'string',
      name: 'description',
    },
    {
      type: 'boolean',
      name: 'enabled',
    },
    {
      type: 'password',
      name: 'password',
      hidden: true,
    },
  ],
});
