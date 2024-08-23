import { Plugin } from '@nocobase/client';
import { AdminPublicFormList } from './components/AdminPublicFormList';
import { AdminPublicFormPage } from './components/AdminPublicFormPage';
import { PublicFormPage } from './components/PublicFormPage';

export class PluginSharedFormsClient extends Plugin {
  async load() {
    this.app.router.add('public-forms', {
      path: '/public-forms/:name',
      Component: PublicFormPage,
    });
    this.app.pluginSettingsManager.add('public-forms', {
      title: 'Public forms',
      icon: 'TableOutlined',
      Component: AdminPublicFormList,
    });
    this.app.pluginSettingsManager.add(`public-forms/:name`, {
      title: false,
      pluginKey: 'public-forms',
      isTopLevel: false,
      Component: AdminPublicFormPage,
    });
  }
}

export default PluginSharedFormsClient;
