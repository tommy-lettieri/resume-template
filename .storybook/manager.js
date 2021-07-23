import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { version, name } from '../package.json';

addons.setConfig({
   theme: create({
       base: 'light',
       brandTitle: `${name} v.${version}`
   }),
});
