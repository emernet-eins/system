import AppHeader from '../../components/header/header.js';

const components = [{ componentName: 'app-header', class: AppHeader }];

components.forEach(component => {
  customElements.define(component.componentName, component.class);
});
