import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './episode-list.css';

const BASE_CLASS = 'episode-card_';

export default function EpisodesList() {
    const arr = [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/35",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/62",
        "https://rickandmortyapi.com/api/character/127",
        "https://rickandmortyapi.com/api/character/144",
        "https://rickandmortyapi.com/api/character/158",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/249",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/394",
        "https://rickandmortyapi.com/api/character/395",
        "https://rickandmortyapi.com/api/character/435"
    ]
    // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);
    // iterable to hold fetch calls - async operations
    const [characterFetchCalls, setCharacterFetchCalls] = useState([])

    useEffect(() => {
        
        Promise.all(
            arr.map(async (c,i) => {
                // setCharacterFetchCalls([...characterFetchCalls, await fetch(c)])
                return await fetch(c).then(res => res.json())
            }) 
        ).then(allResponses => {
            console.log('allResponses', allResponses)
        })
        
       // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then(res => {
                setEpisodes(res.data.results)
                setMaxPages(res.data.info.pages)
                console.log('maxPages', res.data.info.pages)
                console.log(res.data.results)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [page]);
    console.log('characterFetchCalls', characterFetchCalls)
  return (
    <div>
        <section className='episodes-list grid-view'>
        {episodes.map(episode => {
            return (
                <div key={episode.episode} className={`${BASE_CLASS}container`}>
                <h2 className={`${BASE_CLASS}title`}>{episode.name}</h2>

                </div>
            )
        })}
        </section>
        <div className={`${BASE_CLASS}footer-nav`}>
            <p onClick={() => setPage(page === 1 ? maxPages : page - 1)}>-</p><p>{page}</p><p onClick={() => setPage(page === maxPages ? 1 : page + 1)}>+</p>
        </div>
    </div>
  );
};