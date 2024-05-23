import React, { useEffect, useState } from "react";

const BASE_URL = "https://dog.ceo/api";

const Dog = ({ name, picture }) => {
  return (
    <div className="js_dog">
      <p className="js_name">{name}</p>
      <img alt={name} className="js_img" src={picture} />
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [dogs, setDogs] = useState([]);

  const getBreedPics = async (names) => {
    const breeds = await Promise.all(
      names.map(async (name) => {
        const res = await fetch(`${BASE_URL}/breed/${name}/images/random`);
        const data = await res.json();

        return { name, picture: data.message };
      })
    );

    setDogs(breeds);
    setIsLoading(false);
  };

  const fetchDogs = async () => {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/breeds/list/all`);
    const data = await res.json();

    const names = Object.keys(data.message);
    getBreedPics(names);
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  if (isLoading) {
    return <div id="js_loading">Loading...</div>;
  }

  return (
    <ul id="js_gallery">
      {dogs.map((dog) => (
        <Dog key={dog.name} {...dog} />
      ))}
    </ul>
  );
};

export default Home;
