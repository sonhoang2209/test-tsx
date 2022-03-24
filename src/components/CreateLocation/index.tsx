import React, { useState } from 'react'
import { Location } from '../Table'

export interface IProps {
  location: Location[]
}

const CreatLocation: React.FC<IProps> = () => {
  const [location, setLocation] = useState<Location>({
    nameTemple: '',
    image: '',
    address: '',
    introduction: '',
    lat: 0,
    lng: 0
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (
      !location.nameTemple ||
      !location.address ||
      !location.image ||
      location.lat !== 0 ||
      location.lng !== 0
    ) {
      return
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

export default CreatLocation
