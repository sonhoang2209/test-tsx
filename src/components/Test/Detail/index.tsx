import React, { useState } from 'react'
import { IState as Props} from '../../../App'

export interface IProps {
    people : Props["people"]
    setPeople : React.Dispatch<React.SetStateAction<Props["people"]>>
}

const Detail: React.FC<IProps>= ({people, setPeople}) => {
    const [person, setPerson] = useState({
        name:"",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        })     
    }
    

    const handleClick = (): void => {
        if( !person.name || !person.age || !person.img ) {
            return
        } 
        setPeople([
            ...people,
            {
                name:person.name,
                age: parseInt(person.age),
                note: person.note,
                img: person.img
            }
        ])
    }

    return (
        <div className='addtolist'>
            <input
                type="text"
                placeholder="name"
                className="addtolist-input"
                name='name'
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="0"
                className="addtolist-input"
                name='age'
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image url"
                className="addtolist-input"
                name='img'
                onChange={handleChange}
            />
            <textarea
                placeholder="notes"
                className="addtolist-input"
                name='note'
                onChange={handleChange}
            />
            <button
                className='addtolist-btn'
                onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}

export default Detail;