import React, { useState, useEffect } from "react";
import { Input } from 'semantic-ui-react'

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, setName] = useState('');

  const handleInputChange = (e) =>{
    // console.log(e)
    // console.log('here')
    setName(e.target.value);
  }

  useEffect(()=>{
    // console.log('here')
    onSearch(name);
  },[name]);


  return (
    <section className="search-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          onChange={handleInputChange}
          placeholder="Search"
          value={name}
          name="name"
        />
      </form>
    </section>
  );
}