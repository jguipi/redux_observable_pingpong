import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';

import AppWithData from './containers/AppContainer';
import store from './store';

const ROOT = document.getElementById('root');

const index = (
<Provider store={store}>
  <AppWithData />
</Provider>);

ReactDOM.render(
  index,
  ROOT
);
