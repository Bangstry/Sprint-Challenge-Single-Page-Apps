import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";
import { Button } from 'semantic-ui-react';

export default function LocationsList() {
  const [locations, setLocations] = useState();
  const [page, setPage] = useState("");
  const [number, setNumber] = useState(1)
  const [pagination, setPagination] = useState('');
  

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/?name=${page}&page=${number}`)
      .then(res => {
        setLocations(res.data.results);
        setPagination(res.data.info);
      });
  }, [page,number]);

  if (!locations) {
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

      <div className="search-bar">
      <Button className="button" onClick={()=>handleClick('previous')}>Previous</Button>
      
      <Button onClick={()=>handleClick('next')}>Next</Button>
      </div>
      <section className="location-list grid-view">
        {locations.map(location => {
          return <LocationCard location={location} key={location.id} />;
        })}
      </section>
    </div>
  );
}