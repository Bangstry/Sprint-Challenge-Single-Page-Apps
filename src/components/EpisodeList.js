import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm";
import { Button } from 'semantic-ui-react';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState();
  const [page, setPage] = useState("");
  const [pagination, setPagination] = useState('');
  const [number, setNumber] = useState(1)

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?name=${page}&page=${number}`)
      .then(response => {
        setEpisodes(response.data.results);
        setPagination(response.data.info);
      });
  }, [page, number]);

  if (!episodes || !pagination) {
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
    setPage(search)
    
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div className="search-bar-section">
      <Button className="ui button" onClick={()=>handleClick('prev')}>Previous</Button>
      
      <Button onClick={()=>handleClick('next')}>Next</Button>
      </div>
      <section className="episode-list grid-view">
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </section>
    </div>
  );
};

export default EpisodeList;