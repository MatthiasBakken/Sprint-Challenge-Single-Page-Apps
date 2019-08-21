import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

// import './character-list.css';

const BASE_CLASS = 'character-card_';

export default function CharactersList() {
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);

    useEffect(() => {
       // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => {
                setCharacters(res.data.results)
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
        <section className='character-card grid-view'>
        {characters.map(character => {
            return (
                // render EpisodeCard component for every episode
                // give each EpisodeCard the arr of character URLS
                <CharacterCard key={character.id} character={character} />
            )
        })}
        </section>
        <div className={`${BASE_CLASS}footer-nav`}>
            <p onClick={() => setPage(page === 1 ? maxPages : page - 1)}>-</p><p>{page}</p><p onClick={() => setPage(page === maxPages ? 1 : page + 1)}>+</p>
        </div>
    </div>
  );
};