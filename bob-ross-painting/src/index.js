import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import './index.css';
import 'tachyons';
import { paintings } from './paintings';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CardList paintings={paintings} />, document.getElementById('root'));



serviceWorker.unregister();
