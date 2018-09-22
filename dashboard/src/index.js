import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import Dashboard from './pages/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dashboard />, document.querySelector('#root'));
registerServiceWorker();
