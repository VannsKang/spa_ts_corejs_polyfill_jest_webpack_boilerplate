// LINK polyfill
import 'whatwg-fetch';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { renderHeader, renderUser } from './App';

const App = async () => {
  const template = `
    <div class="container">
      <div id="header"></div>
      <div id="user"></div>
    </div>  
  `;

  document.getElementById('App')!.innerHTML = await template;
  renderElement();
};

const renderElement = () => {
  renderHeader();
  renderUser();
};

export default App();
