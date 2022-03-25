import { IProps } from '../CreateUser'
import { People } from '../../../App'

import React from 'react'

// interface IPeople {
//   people: IProps['people']
//   setPeople: IProps['setPeople']
//   setPeopleEdit: IProps['setPeopleEdit']
// }

type Todo = Omit<IProps, 'peopleEdit'>

const List: React.FC<Todo> = ({ people, setPeople, setPeopleEdit }) => {
  const handleClickDel = (data: People) => (): void => {
    setPeople([...people.filter(person => person !== data)])
  }

  const handleClickEdit = (data: People) => (): void => {
    setPeopleEdit({ ...data })
  }

  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li key={index} className="list">
          <div className="list-header">
            <img alt="" className="list-img" src={person.img} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="list-note">{person.note}</p>
          <p>
            <button onClick={handleClickDel(person)}>Delete</button>
            <button onClick={handleClickEdit(person)}>Edit</button>
          </p>
        </li>
      )
    })
  }
  return <ul>{renderList()}</ul>
}

export default List
