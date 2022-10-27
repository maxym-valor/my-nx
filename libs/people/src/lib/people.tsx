import { IPersone, usePeople } from 'libs/data-access/src';

export function People() {
  const people: IPersone[] = usePeople(1);
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {people.map((person: IPersone) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default People;
