import React from 'react'
import GuestForm from '../guests/GuestForm'
import GuestCounter from '../guests/GuestCounter'
import GuestFilter from '../guests/GuestFilter'
import GuestSearch from '../guests/GuestSearch'
import Guests from '../guests/Guests'


export const Home = () => {
    return (
        <div className="app-comtainer">
            <div className="main">
                <div className="filter">
                    <GuestFilter />
                    <GuestSearch />
                </div>
                <GuestForm /> 
                <GuestCounter />
            </div>
            <Guests />
        </div>
    )
}
export default Home