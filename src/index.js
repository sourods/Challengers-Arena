import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Game } from './Game';

import { BrowserRouter as Router } from 'react-router-dom'; 

ReactDOM.render(
    <Router>
        <Game>
            <App />
        </Game>
    </Router>, document.getElementById('root')
);
