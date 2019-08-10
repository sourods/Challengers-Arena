import React, { Component } from 'react';
import Header from './header';
import Selection from './selection';

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