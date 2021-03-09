import React, { Component } from 'react';
import LocalHeader from './components/header';
import Selection from './components/selection';

import './index.css';


export default class CharacterSelection extends Component{
    render(){
        return(
            <div>
                <LocalHeader/>
                <Selection/>
            </div>
        )
    }
}