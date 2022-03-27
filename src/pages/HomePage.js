import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap'
// Components

import Pokemon from '../components/Pokemon'
const HomePage = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemon = async () => {
        let pokemonArray = []
        for(let i = 0; i <= 150; i++){
            pokemonArray.push(await getPokemonData[i])
        }
        
        setPokemon(pokemonArray)
        setLoading(false)
    }
    
    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res
    }
    useEffect(() => {
        getPokemonList()
    }, [])
    return (
        <div>
            {
                loading ? (<h1>Loading...</h1>)
                :(
                    <Row>
                        {pokemon.map(p => (
                            <Col key={p.data.name} xs={12} sm={12} md={4} lg={4}>
                                <Pokemon pokemon={p.data}/>
                            </Col>
                        ))}
                    </Row>
                )
            }
        </div>
    );
};

export default HomePage;