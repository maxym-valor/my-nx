import { useEffect, useState } from 'react';

export interface IPersone {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface Response<T> {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
}

export function usePeople(pageNumber: number): IPersone[] {
  const [people, setPeople] = useState<IPersone[]>([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((res) => res.json())
      .then((res) => setPeople(res.results));
  }, []);
  console.log(people);

  return people;
}
