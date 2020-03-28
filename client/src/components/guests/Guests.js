import React, {useContext} from 'react'
import Guest from './Guest'
import GuestContext from '../../comtext/guestContext/guestContext'
import guestReducer from '../../comtext/guestContext/guestReducer'

const Guests = () => {
    const {guests} = useContext (GuestContext)
    return (
        <div className="guests">
            {guests.map(Guest => <Guest key={Guest.id} Guest={Guest}/>)}
            
        </div>
    )
}
export default Guests
