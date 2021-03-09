import React from 'react';

const CharacterInfo = (props) => {
    const { info } = props;
    return (
        <section>
            <img src={info.portrait} className='class_portrait' alt="character portrait" />
            <h3>{info.class}</h3>
            <p>{info.currentHealth}</p>
            <p>{info.currentMana}</p>
            <p>{info.speed}</p>
            <p>{info.strength}</p>
            <p>{info.defense}</p>
            <p>{info.agility}</p>
        </section>
    )
}
export default CharacterInfo;