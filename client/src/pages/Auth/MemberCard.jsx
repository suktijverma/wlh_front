import React from 'react';
import './MemberCard.css';
// import {FaInstagramSquare } from 'react-icons/fa';
// import {BsLinkedin} from 'react-icons/bs';

const MemberCard = (props) => {

    return (
        <section>
            <div className="member-card">
                <div className="upper-block">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvPAh1rf31VjjB6RzEY1iMWcmOFkMqU-zWQwBpRsDcaN9Yon5WVRTSZdSz30-lgX_Uos&usqp=CAU" 
                    alt="" 
                    className="card-image" 
                    height={150} 
                    width={150}
                />
                </div>
                <div className="middle-block">
                    <div className="nme">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="ino">
                        <h4>{props.info}</h4>
                    </div>
                </div>
                <div className="lower-block">
                    <div className="media">
                        {/* <a href=''><FaInstagramSquare className='instagram'/></a> */}
                        {/* <a href=''><BsLinkedin className='linkedIn'/></a> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MemberCard;