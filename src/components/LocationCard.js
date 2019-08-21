import React, { useState } from 'react';
import classNames from 'classnames';

import './episode-card.css';

export default function CharacterCard(props) {
    const [characters, setCharacters] = useState([])
    const [classFlip, setClassFlip] = useState(false)

    const { location } = props;

    const fetchCharUrlHandler = () => {
        setClassFlip(!classFlip);
        Promise.all(location.residents.map( async(r) => (
            await fetch(r).then(res => res.json())
        ))).then(allResponses => {
            console.log('all res', allResponses)
            setCharacters(allResponses)
        })
    }

    const mouseLeaveHandler = () => {
        setClassFlip(false)
    }

    return (
        <div className={classNames({['flip-card']: classFlip, ['flip-card-default']: !classFlip})} onMouseLeave={mouseLeaveHandler}>
            <div className={classNames({['flip-card-inner']: classFlip})}>
                <div className={classNames({['flip-card-front']: classFlip})}>
                    <h2>{location.name}</h2>
                    <p>{`Type: ${location.type}`}</p>
                    <p>{`Dimension: ${location.dimension}`}</p>
                    <p>Click Here for Residents List</p>
                    <button onClick={fetchCharUrlHandler}>View Residents</button>
                </div>
                <div className={classNames({['flip-card-back']: classFlip})}>
                    {classFlip ? characters.map(c => {
                        return (
                            <p key={c.id}>{c.name}</p>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    );
}
