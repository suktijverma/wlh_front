import React from 'react';
import './Team.css';
import MemberCard from './MemberCard';

const Team = () => {
    return (
        <>
            <header className="heading">
                <h1> 
                    <span>O</span>UR-
                    <span>T</span>EAM
                </h1>
                
            </header>
            <section className='team'>
                <h1 className="section-heading">MENTOR</h1>
                <div className="mentor">
                    <MemberCard 
                        name = "Kushagra Srivastav"
                        info = "Upcoming SDE @ Amazon, Dublin"
                    />
                </div>
                <h1 className="section-heading">TEAM MEMBERS</h1>
                <div className="teamMember">
                    <MemberCard
                        name = "Aryman Rawat"
                        info = "Frontend Developer"
                    />
                    <MemberCard
                        name = "Tarun Mishra"
                        info = "Developer"
                    />
                    <MemberCard 
                        name = "Suktij Verma"
                        info = "Developer"
                    />
                </div>
                
            </section>
        </>
    )
}

export default Team;