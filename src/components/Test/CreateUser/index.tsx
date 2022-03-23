import React, { useState } from 'react'
import { IState as Props } from '../../../App'

export interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const Detail: React.FC<IProps> = ({ people, setPeople }) => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    note: '',
    img: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (!person.name || !person.age || !person.img) {
      return
    }
    setPeople([
      ...people,
      {
        name: person.name,
        age: parseInt(person.age),
        note: person.note,
        img: person.img
      }
    ])
  }

  return (
    <div className="add-to-list">
      <input
        type="text"
        placeholder="name"
        className="add-to-list-input"
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="0"
        className="add-to-list-input"
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image url"
        className="add-to-list-input"
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="notes"
        className="add-to-list-input"
        name="note"
        onChange={handleChange}
      />
      <button className="add-to-list-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  )
}

export default Detail
