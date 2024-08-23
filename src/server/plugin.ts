import { UiSchemaRepository } from '@nocobase/plugin-ui-schema-storage';
import { Plugin } from '@nocobase/server';

export class PluginSharedFormsServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.registerActionHandlers({
        publicSubmit: async (ctx, next) => {
          ctx.body = 'ok';
          await next();
        },
      });
    });
    this.app.resourceManager.registerActionHandlers({
      'sharedForms:getMeta': async (ctx, next) => {
        const { filterByTk } = ctx.action.params;
        const sharedForms = this.db.getRepository('sharedForms');
        const uiSchema = this.db.getRepository<UiSchemaRepository>('uiSchemas');
        const instance = await sharedForms.findOne({
          filter: {
            slug: filterByTk,
          },
        });
        const schema = await uiSchema.getJsonSchema(filterByTk);
        ctx.body = {
          dataSource: {
            key: 'main',
            displayName: 'main',
            collections: [
              {
                name: 'users',
                fields: [
                  {
                    key: '9nlc0hg2yw3',
                    name: 'id',
                    type: 'bigInt',
                    interface: 'id',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    uiSchema: {
                      type: 'number',
                      title: '{{t("ID")}}',
                      'x-component': 'InputNumber',
                      'x-read-pretty': true,
                    },
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                  },
                  {
                    key: '7wkjj2n3ngj',
                    name: 'nickname',
                    type: 'string',
                    interface: 'input',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    uiSchema: {
                      type: 'string',
                      title: '{{t("Nickname")}}',
                      'x-component': 'Input',
                    },
                  },
                  {
                    key: 'js94s37qyzg',
                    name: 'username',
                    type: 'string',
                    interface: 'input',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    unique: true,
                    uiSchema: {
                      type: 'string',
                      title: '{{t("Username")}}',
                      required: true,
                      'x-component': 'Input',
                      'x-validator': {
                        username: true,
                      },
                    },
                  },
                  {
                    key: 'uj0pbokt8o9',
                    name: 'email',
                    type: 'string',
                    interface: 'email',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    unique: true,
                    uiSchema: {
                      type: 'string',
                      title: '{{t("Email")}}',
                      required: true,
                      'x-component': 'Input',
                      'x-validator': 'email',
                    },
                  },
                  {
                    key: 'rdhnp68luwv',
                    name: 'phone',
                    type: 'string',
                    interface: 'input',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    unique: true,
                    uiSchema: {
                      type: 'string',
                      title: '{{t("Phone")}}',
                      required: true,
                      'x-component': 'Input',
                    },
                  },
                  {
                    key: 'lhhaalru7om',
                    name: 'password',
                    type: 'password',
                    interface: 'password',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    hidden: true,
                    uiSchema: {
                      type: 'string',
                      title: '{{t("Password")}}',
                      'x-component': 'Password',
                    },
                  },
                  {
                    key: 'llw7vpxwhcp',
                    name: 'appLang',
                    type: 'string',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                  },
                  {
                    key: 'aqva9q3nd2d',
                    name: 'resetToken',
                    type: 'string',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    hidden: true,
                    unique: true,
                  },
                  {
                    key: '1gro16y3haa',
                    name: 'systemSettings',
                    type: 'json',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    defaultValue: {},
                  },
                  {
                    key: '1h6ej1ui723',
                    name: 'createdAt',
                    type: 'date',
                    interface: 'createdAt',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    field: 'created_at',
                    uiSchema: {
                      type: 'datetime',
                      title: '{{t("Created at")}}',
                      'x-component': 'DatePicker',
                      'x-read-pretty': true,
                      'x-component-props': {
                        dateFormat: 'YYYY-MM-DD',
                      },
                    },
                  },
                  {
                    key: 'ug2q8m55x5a',
                    name: 'updatedAt',
                    type: 'date',
                    interface: 'updatedAt',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    field: 'updated_at',
                    uiSchema: {
                      type: 'datetime',
                      title: '{{t("Last updated at")}}',
                      'x-component': 'DatePicker',
                      'x-read-pretty': true,
                      'x-component-props': {
                        dateFormat: 'YYYY-MM-DD',
                      },
                    },
                  },
                  {
                    key: 'fjx5pzmb879',
                    name: 'sort',
                    type: 'sort',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    hidden: true,
                  },
                  {
                    key: 'b89fk0caql1',
                    name: 'createdBy',
                    type: 'belongsTo',
                    interface: 'createdBy',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    target: 'users',
                    uiSchema: {
                      type: 'object',
                      title: '{{t("Created by")}}',
                      'x-component': 'AssociationField',
                      'x-read-pretty': true,
                      'x-component-props': {
                        fieldNames: {
                          label: 'nickname',
                          value: 'id',
                        },
                      },
                    },
                    targetKey: 'id',
                    foreignKey: 'createdById',
                  },
                  {
                    key: 'dkeqb75cu54',
                    name: 'createdById',
                    type: 'context',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    index: true,
                    visible: true,
                    dataType: 'bigInt',
                    dataIndex: 'state.currentUser.id',
                    createOnly: true,
                  },
                  {
                    key: '7i475yxfdks',
                    name: 'updatedBy',
                    type: 'belongsTo',
                    interface: 'updatedBy',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    target: 'users',
                    uiSchema: {
                      type: 'object',
                      title: '{{t("Last updated by")}}',
                      'x-component': 'AssociationField',
                      'x-read-pretty': true,
                      'x-component-props': {
                        fieldNames: {
                          label: 'nickname',
                          value: 'id',
                        },
                      },
                    },
                    targetKey: 'id',
                    foreignKey: 'updatedById',
                  },
                  {
                    key: 'nu4dt79403u',
                    name: 'updatedById',
                    type: 'context',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    index: true,
                    visible: true,
                    dataType: 'bigInt',
                    dataIndex: 'state.currentUser.id',
                  },
                  {
                    key: '2yrihb29jst',
                    name: 'roles',
                    type: 'belongsToMany',
                    interface: 'm2m',
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    target: 'roles',
                    through: 'rolesUsers',
                    onDelete: 'CASCADE',
                    otherKey: 'roleName',
                    uiSchema: {
                      type: 'array',
                      title: '{{t("Roles")}}',
                      'x-component': 'AssociationField',
                      'x-component-props': {
                        multiple: true,
                        fieldNames: {
                          label: 'title',
                          value: 'name',
                        },
                      },
                    },
                    sourceKey: 'id',
                    targetKey: 'name',
                    foreignKey: 'userId',
                  },
                  {
                    key: 'ido1aofbcxi',
                    name: 'jobs',
                    type: 'belongsToMany',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    target: 'jobs',
                    through: 'users_jobs',
                    otherKey: 'jobId',
                    sourceKey: 'id',
                    targetKey: 'id',
                    foreignKey: 'userId',
                  },
                  {
                    key: '1hkcmlrup9w',
                    name: 'usersJobs',
                    type: 'hasMany',
                    interface: null,
                    description: null,
                    collectionName: 'users',
                    parentKey: null,
                    reverseKey: null,
                    target: 'users_jobs',
                    sourceKey: 'id',
                    targetKey: 'id',
                    foreignKey: 'userId',
                  },
                ],
              },
            ],
          },
          token: this.app.authManager.jwt.sign({
            // todo
          }),
          schema,
        };
        await next();
      },
    });
    this.app.acl.allow('sharedForms', 'getMeta', 'public');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginSharedFormsServer;
