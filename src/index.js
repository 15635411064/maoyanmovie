import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import "./reset.css"

React.Component.prototype.$axios=axios;
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
