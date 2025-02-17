import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Button } from 'semantic-ui-react'

export default function CharacterList() {

  const [characters, setCharacters] = useState();
  const [page, setPage] = useState("");
  const [pagination, setPagination] = useState('');
  const [number, setNumber] = useState(1)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${page}&page=${number}`)
      .then(res => {
        setCharacters(res.data.results);
        setPagination(res.data.info);
      });
  }, [page, number]);

  if (!characters || !pagination) {
    return null;
  }

  var prev = pagination.prev;
  var next = pagination.next;

  const handleClick = (button) =>{
    if(button=='next'){
      if(next != ""){
        setNumber(number+1);
      }
    } else {
      if(prev != ""){
        setNumber(number-1);
      }
    }
  }

  const onSearch = search => {
    setPage(search);
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div className="search-bar-section">
      <Button className="ui button" onClick={()=>handleClick('previous')}>Previous</Button>
      
      <Button onClick={()=>handleClick('next')}>Next</Button>
      </div>
      <section className="character-list grid-view">
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </section>
    </div>
  );
}