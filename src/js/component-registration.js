/**
 * This files serves as a simple custom element registration
 * service, to have all registrations at once central place.
 */

import AppHeader from '../../components/header/header.js';

const registerComponents = () => {
  const components = [{ componentName: 'app-header', class: AppHeader }];

  components.forEach(component => {
    customElements.define(component.componentName, component.class);
  });
};

export default registerComponents;
