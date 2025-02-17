import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyName from "./components/MyName";
import StateIndex from "./components/StateIndex";
import MyAge from "./components/MyAge";
import ElementList from "./components/ElementList/ElementList.tsx";

type typeArrayUsers = {
    name: string;
    age: number;
}[]

function App() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const arrayUsers: typeArrayUsers = [{
        name: "Leonid",
        age: 21,
    }, {
        name: "Gevork",
        age: 20,
    }
    ]

  const [count, setCount] = useState(0)
  const names = [{name: 'Leonid'}, {name: 'Alice'}, {name: 'Gevork'}];

  return (
    <>
      <div>
          {arrayUsers.map((elem, index) => (
              <li key={index}>
                  {elem.name} - Возраст: {elem.age}
              </li>
          ))}
          <ElementList name={'Gevork'} isPacked={true} />
          <ElementList name={'Leonid'} isPacked={false} />
          <MyName name={names[0].name}>
              <MyAge age={45} />
          </MyName>
          <MyName name={names[1].name}/>
          <MyName name={names[2].name}/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <StateIndex index={index1} setIndex={setIndex1} />
        <StateIndex index={index2} setIndex={setIndex2} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
