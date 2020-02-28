import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  
  const [query, setQuery] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      })
      .catch(error =>{
        console.log("Data not returned", error);
    })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      </div>
      <div>
      {data.map(item =>{
        return (
          <CharacterCard key={item.id} name = {item.name} status = {item.status} species = {item.species}/>
        )
      })}
      </div>
    </section>
  );
}
