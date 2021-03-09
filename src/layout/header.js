import React, { Component } from 'react';
import { GameConsumer } from '../../core/Game';
import SoundPlayer from '../../components/sound.player';

class Header extends Component {

    render() {
        const { audio } = this.props;
        return (
            <header>
                <h1>{audio.currentTrack.title}</h1>
                <SoundPlayer
                    url={audio.currentTrack.audio}
                    trackTitle={audio.currentTrack.title}
                    playStatus={audio.playStatus}
                />
            </header>
        )
    }
}
const GameHeader = GameConsumer(Header);
export default GameHeader;