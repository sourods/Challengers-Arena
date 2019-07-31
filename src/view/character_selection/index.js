import React, { Component } from 'react';
import Header from './components/header';
import Selection from './components/selection';

import './index.css';


export default class CharacterSelection extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Selection/>
            </div>
        )
    }
}