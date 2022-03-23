import React, { useState, useEffect } from 'react';
import './style.scss'
import axios from '../../axios/axiosConfig'

interface IProps{
    location:{
        nameTemple: string,
        image: string,
        address: string,
        introduction: string
    }[],
    search: string,
}
function Table() {
    const [location, setLocation] = useState<IProps["location"]>([])
    const [search, setSearch] = useState<IProps["search"]>("")

    const getlocations = async ():Promise<void> => {
        const locations = await axios.get("/map")
        setLocation(locations.data)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setSearch(e.target.value)
    }

    useEffect(() => { getlocations() }, [])

    const renderlocation = () => {
        return location?.map((location, index) => location.nameTemple.toLowerCase().includes(search.toLowerCase().trim(), 0) ? (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{location.nameTemple}</td>
                <td><img alt='' src={location.image} width='140' height='100' /></td>
                <td>{location.address}</td>
                <td style={{maxWidth:400}}>{location.introduction}</td>
            </tr>
        ): "")
    }
    return (
        <div>
            <input 
                className='input-search' 
                onChange={handleChange} 
                type="text" 
                placeholder='Nhập tên chùa bạn muốn tìm'
            />
            <table className="table center">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Image</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Giới thiệu</th>
                    </tr>
                </thead>
                <tbody>
                   {renderlocation()}
                </tbody>
            </table>
        </div>
    );
}

export default Table;