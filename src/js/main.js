import registerComponents from './component-registration.js';
import Version from '../lib/version.js';

registerComponents();
Version.writeVersionToTitle();
