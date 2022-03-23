import React, { useState } from 'react'
import './App.css'
import Table from './components/Table'
import CreateUser from './components/Test/CreateUser'
import ListUser from './components/Test/ListUser'

export type People = {
  name: string
  age: number
  img: string
  note?: string
}
export interface IState {
  people: People[]
}

const data: People[] = [
  {
    name: 'LeBron James',
    age: 35,
    img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    note: 'Allegeric to staying on the same team'
  },
  {
    name: 'Kobe Bryant',
    age: 42,
    img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
  }
]

function App() {
  const [people, setPeople] = useState<IState['people']>(data)

  return (
    <div className="App">
      <h1 className="title">List card</h1>
      <ListUser people={people} setPeople={setPeople} />
      <CreateUser people={people} setPeople={setPeople} />
      <h1 className="title">Temples</h1>
      <Table />
    </div>
  )
}

export default App
