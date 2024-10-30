import { useState } from 'react';
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [globalcount, setLikes] = React.useState(0);
    const [count, setCount] = React.useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <Header title="Develop. Preview. Ship." />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

      </div>
    );
  }