import React, { useState } from 'react';
import classNames from 'classnames';

import './character-card.css';

export default function CharacterCard(props) {
    const [episodes, setEpisodes] = useState([])
    const [classFlip, setClassFlip] = useState(false)

    const { character } = props;

    const fetchCharUrlHandler = () => {
        setClassFlip(!classFlip);
        Promise.all(character.episode.map( async(e) => (
            await fetch(e).then(res => res.json())
        ))).then(allResponses => {
            console.log('all res', allResponses)
            setEpisodes(allResponses)
        })
    }

    const mouseLeaveHandler = () => {
        setClassFlip(false)
    }

    return (
        <div className={classNames({['flip-card']: classFlip, ['flip-card-default']: !classFlip})} onMouseLeave={mouseLeaveHandler}>
            <div className={classNames({['flip-card-inner']: classFlip})}>
                <div className={classNames({['flip-card-front']: classFlip})}>
                    <h2>{character.name}</h2>
                    <p>{`Status: ${character.status}`}</p>
                    <img src={character.image} style={{ height: '150px', width: '150px'}} />
                    <p>Click Here for Episode List</p>
                    <button onClick={fetchCharUrlHandler}>View Episodes</button>
                </div>
                <div className={classNames({['flip-card-back']: classFlip})}>
                    {classFlip ? episodes.map(e => {
                        return (
                            <p key={e.id}>{e.name}</p>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    );
}
