import React from 'react';
import Sound from 'react-sound';

export default class SoundPlayer extends React.Component {
    render() {
        const { trackTitle } = this.props;
        console.log('props sound',this.props)
        // this.props.playStatus = this.props.url ? Sound.status.PLAYING : Sound.status.STOPPED;
        return (
            <div>
                <h2>{trackTitle}</h2>
                <Sound {...this.props} />
            </div>
        )
    }
}