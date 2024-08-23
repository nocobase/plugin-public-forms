import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
import React from 'react';
import { publicFormsCollection } from '../collections';
import { useDeleteActionProps, useEditFormProps, useSubmitActionProps } from '../hooks';
import { publicFormsSchema } from '../schemas';

export const AdminPublicFormList = () => {
  return (
    <ExtendCollectionsProvider collections={[publicFormsCollection]}>
      <SchemaComponent
        schema={publicFormsSchema}
        scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }}
      />
    </ExtendCollectionsProvider>
  );
};
