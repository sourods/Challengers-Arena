import React, { Component, createContext } from 'react';
import Sound from 'react-sound';

export const GameContext = createContext();

const selectSoundStatus = status => {
    switch (status) {
        default:
        case 'STOPPED':
            return Sound.status.STOPPED
        case 'PLAYING':
            return Sound.status.PLAYING
        case 'PAUSED':
            return Sound.status.PAUSED
    }
}

class Game extends Component {
    constructor() {
        super()
        this.state = {
            audio: {
                setTrack: (track, status, options = {}) => {
                    this.setState({
                        audio: { ...this.state.audio, currentTrack: track, playStatus: selectSoundStatus(status), options }
                    })
                },
                currentTrack: {
                    audio: null,
                    title: null
                },
                playStatus: Sound.status.STOPPED,
                options: {}
            }

        }
    }
    render() {
        return (
            <GameContext.Provider value={{...this.state}}>
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export default Game;