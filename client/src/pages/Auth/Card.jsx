import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';
import Form from './Form';
// import Main1 from './Main1';
import Main2 from './Main2';
// import Index1 from './Index1';

const Card = (props)=> {

   const navigate=useNavigate()

    const handlec=()=>{
       navigate('/Index1')
    }
    const handlec1=()=>{
        navigate('/Main2')
     }
    return (
        <>
        <div className='container'>
                <div className="card1">
                    <div className="text-secton">
                        <div className="title">
                            <button className='btn1' onClick={handlec}>Enter WorkMode</button>
                        </div>
                        
                    </div>
                </div>
                <div className="card2">
                    <div className="text-secton">
                        <div className="title">
                        <button className='btn2' onClick={handlec1}>Enter RestMode</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card; 