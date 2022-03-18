import React  from 'react';
import { IProps } from '../Detail';

const List: React.FC<IProps> = ({people, setPeople}) => {

    const handleClick = (data : any) => (): void => { 
        setPeople([
            ...people.filter(person => person !== data)
        ])
    }

    const renderList = (): JSX.Element[] => {
        return people.map((person,index) => {
            return (
                <li key={index} className='list'>
                    <div className='list-header'>
                        <img alt='' className='list-img' src={person.img} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className='list-note'>{person.note}</p>
                    <td><button onClick={handleClick(person)}>delete</button></td>
                </li>
            )
        })
    }
    
    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;