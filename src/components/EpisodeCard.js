import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './episode-card.css';

export default function EpisodeCard(props) {
    const [chars, setChars] = useState([])
    const [classFlip, setClassFlip] = useState(false)

    const { episode } = props;

    const fetchCharUrlHandler = () => {
        setClassFlip(!classFlip);
        Promise.all(episode.characters.map( async(c) => (
            await fetch(c).then(res => res.json())
        ))).then(allResponses => {
            console.log('all res', allResponses)
            setChars(allResponses)
        })
    }

    const mouseLeaveHandler = () => {
        setClassFlip(false)
    }

    return (
        <div className={classNames({['flip-card']: classFlip, ['flip-card-default']: !classFlip})} onMouseLeave={mouseLeaveHandler}>
            <div className={classNames({['flip-card-inner']: classFlip})}>
                <div className={classNames({['flip-card-front']: classFlip})}>
                    <h2>{episode.name}</h2>
                    <p>{episode.air_date}</p>
                    <p>Click Here for Character List</p>
                    <button onClick={fetchCharUrlHandler}>View Characters</button>
                </div>
                <div className={classNames({['flip-card-back']: classFlip})}>
                    {classFlip ? chars.map(c => {
                        return (
                            <p key={c.id}>{c.name}</p>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    );
}
