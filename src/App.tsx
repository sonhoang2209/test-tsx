import './App.css'
import React, { useEffect, useState } from 'react'
// import Table from './components/Table'
import CreateUser from './components/Test/CreateUser'
import ListUser from './components/Test/ListUser'
import uuid from './components/commons/uuid'

export type People = {
  id: string
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
    id: uuid(),
    name: 'LeBron James',
    age: 35,
    img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    note: 'Allegeric to staying on the same team'
  },
  {
    id: uuid(),
    name: 'Kobe Bryant',
    age: 42,
    img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
  }
]

function App() {
  const [people, setPeople] = useState<IState['people']>(data)
  const [peopleEdit, setPeopleEdit] = useState<People>()

  useEffect(() => {
    // console.log(peopleEdit)
  }, [peopleEdit])

  return (
    <div className="App">
      <h1 className="title">List card</h1>
      <ListUser people={people} setPeople={setPeople} setPeopleEdit={setPeopleEdit} />
      <CreateUser
        people={people}
        setPeople={setPeople}
        peopleEdit={peopleEdit}
        setPeopleEdit={setPeopleEdit}
      />
    </div>
  )
}

export default App
