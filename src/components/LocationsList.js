import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

import './location-list.css';

const BASE_CLASS = 'location-card_';

export default function LocationsList() {
    // TODO: Add useState to track data from useEffect
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);

    useEffect(() => {
       // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
            .then(res => {
                setLocations(res.data.results)
                setMaxPages(res.data.info.pages)
                // setCharUrl(res.data.results.characters)
                // console.log('charactersUrl', res.data.results.characters)
                // console.log('maxPages', res.data.info.pages)
                // console.log('results', res.data.results)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [page]);
  return (
    <div>
        <section className='location-list grid-view'>
        {locations.map(location => {
            return (
                // render EpisodeCard component for every episode
                // give each EpisodeCard the arr of character URLS
                <LocationCard key={location.id} location={location} />
            )
        })}
        </section>
        <div className={`${BASE_CLASS}footer-nav`}>
            <p onClick={() => setPage(page === 1 ? maxPages : page - 1)}>-</p><p>{page}</p><p onClick={() => setPage(page === maxPages ? 1 : page + 1)}>+</p>
        </div>
    </div>
  );
};