import React from "react";
import Hero from "../components/Hero";
import ArtCard from "../components/Artcard";
import SearchResult from "../components/SearchResult";
const Home = () => {
  return (
    <>
      <Hero/>
      <SearchResult/>
      <ArtCard type={'Art'}/>
    </>
  );
};

export default Home;
