/**
 * This files serves as a simple custom element registration
 * service, to have all registrations at once central place.
 */

import AppHeader from '../../components/header/header.js';
import AppCard from '../../components/card/card.js';
import AppNumberCard from '../../components/number-card/number-card.js';
import AppButtonCard from '../../components/button-card/button-card.js';

const registerComponents = () => {
  const components = [
    { componentName: 'app-header', class: AppHeader },
    { componentName: 'app-card', class: AppCard },
    { componentName: 'app-number-card', class: AppNumberCard },
    { componentName: 'app-button-card', class: AppButtonCard }
  ];

  components.forEach(component => {
    customElements.define(component.componentName, component.class);
  });
};

export default registerComponents;
