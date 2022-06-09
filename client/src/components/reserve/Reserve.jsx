import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./reserve.css";

const Reserve = ({setOpen, hotelId}) => {
  const {data, loading, error} = useFetch(`/hotels/room/${hotelId}`)


  return (
    <div className='reserve'>
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)}/>
      <span>Select your rooms: </span>
      {data.map(item =>(
        <div className='rItem'>
          <div className="rItemInfo">
            <div className="rTtitle">{item.title}</div>
            <div className="rDesc">{item.desc}</div>
            <div className="rMax">Max People: <b>{item.maxPoeple}</b></div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Reserve