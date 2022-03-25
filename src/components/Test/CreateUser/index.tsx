import React, { useEffect, useState } from 'react'
import { IState as Props } from '../../../App'
import uuid from '../../commons/uuid'
import { People } from '../../../App'

export interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
  peopleEdit: People | undefined
  setPeopleEdit: React.Dispatch<React.SetStateAction<People | undefined>>
}

const data: People = {
  id: '',
  name: '',
  age: 0,
  note: '',
  img: ''
}

type DPeople = Partial<People>

const CreatUser: React.FC<IProps> = ({ people, setPeople, peopleEdit, setPeopleEdit }) => {
  const [person, setPerson] = useState<People>(data)
  const [personUpd, setPersonUpd] = useState<DPeople>(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
    setPersonUpd({
      ...personUpd,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    peopleEdit !== undefined ? setPerson(peopleEdit) : setPerson(data)
  }, [peopleEdit])

  const clear = () => {
    setPerson(data)
    setPersonUpd({})
    setPeopleEdit(undefined)
  }

  const handleClick = (): void => {
    if (!person.name || !person.age || !person.img) {
      return
    }
    if (peopleEdit !== undefined) {
      const isIndExisted = people.findIndex(e => e?.id === peopleEdit?.id)
      people[isIndExisted] = {
        ...people[isIndExisted],
        ...personUpd
      }
      setPeople([...people])
      console.log(personUpd)
      clear()
    } else {
      setPeople([
        ...people,
        {
          id: uuid(),
          name: person.name,
          age: person.age,
          note: person.note,
          img: person.img
        }
      ])
      clear()
    }
  }

  return (
    <div className="add-to-list">
      <input
        type="text"
        placeholder="name"
        className="add-to-list-input"
        name="name"
        onChange={handleChange}
        value={person.name}
      />
      <input
        type="number"
        placeholder="0"
        className="add-to-list-input"
        name="age"
        onChange={handleChange}
        value={person.age}
      />
      <input
        type="text"
        placeholder="Image url"
        className="add-to-list-input"
        name="img"
        onChange={handleChange}
        value={person.img}
      />
      <textarea
        placeholder="notes"
        className="add-to-list-input"
        name="note"
        onChange={handleChange}
        defaultValue={peopleEdit?.note}
        value={person?.note}
      />
      <button className="add-to-list-btn" onClick={handleClick}>
        {peopleEdit === undefined ? 'Add to list' : 'update'}
      </button>
    </div>
  )
}

export default CreatUser
