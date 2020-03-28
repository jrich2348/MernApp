import React from 'react'

export const Guest = ({guest}) => {
    const {name, phone, diet } = guest

    return (
        <div className="guest-card">
            <div className="card-head">
                <div >
                    <label>Confirmed
                    <i className='fas fa-check-square '>
                        <input type="checkbox" /> 
                        </i>
                    </label>
                </div>
                <div>
                    <button title="Edit Guest"><i class="fas fa-user-edit" ></i></button>
                    <button title="Remove Guest"><i class="fas fa-trash-alt remove"></i></button>
                </div>
            </div>
        <div className="card-body">
          <h2>{name}</h2>
    <span className='badge red '>{diet}</span>
          <div className="contact">
            <i className="fas fa-phone-alt"></i>
            <p>{phone}</p>
          </div>
        </div>
      </div>
      )
}
export default Guest
