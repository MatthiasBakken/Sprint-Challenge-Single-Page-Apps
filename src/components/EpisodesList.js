import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

import './episode-list.css';

const BASE_CLASS = 'episode-card_';

export default function EpisodesList() {
    // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);

    useEffect(() => {
       // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then(res => {
                setEpisodes(res.data.results)
                setMaxPages(res.data.info.pages)
                // setCharUrl(res.data.results.characters)
                // console.log('charactersUrl', res.data.results.characters)
                console.log('maxPages', res.data.info.pages)
                console.log('results', res.data.results)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [page]);
  return (
    <div>
        <section className='episodes-list grid-view'>
        {episodes.map(episode => {
            return (
                // render EpisodeCard component for every episode
                // give each EpisodeCard the arr of character URLS
                <EpisodeCard key={episode.episode} episode={episode} />
            )
        })}
        </section>
        <div className={`${BASE_CLASS}footer-nav`}>
            <p onClick={() => setPage(page === 1 ? maxPages : page - 1)}>-</p><p>{page}</p><p onClick={() => setPage(page === maxPages ? 1 : page + 1)}>+</p>
        </div>
    </div>
  );
};