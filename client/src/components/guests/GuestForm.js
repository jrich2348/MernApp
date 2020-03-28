import React, { useContext, useState, useEffect } from 'react'
import GuestContext from '../../comtext/guestContext/guestContext'

const GuestForm = () => {
  const context = useContext(GuestContext)
  const { addGuest, editGuest, clearEdit, update_Guest } = context

  useEffect(() => {
    if (editGuest !== null) {
      setGuest(editGuest)
    } else {
      setGuest({
        title: '',
        postBody: '',
      })
    }
  }, [editGuest, context])

  const [guest, setGuest] = useState({
    title: '',
    postBody: '',
   
  })
  const { title, postBody } = guest
  const onchange = (e) => {
    setGuest({
      ...guest,
      [e.target.title]: e.target.value
    })
  }
  const onsubmit = (e) => {
    e.preventDefault();
    if (editGuest === null) {
      addGuest(guest);

    } else {
      update_Guest(guest)
      clearEdit()
    }
    setGuest({
      title: '',
      postBody: '',
      
    })
  }
  return (

    <div className="invite-section">
      <h1>{editGuest !== null ? 'Edit Guest' : 'What are thinking?'}</h1>
      <form onSubmit={onsubmit} >
        <input type="text" placeholder="Title"   cols="30"rows="10" title="title" value={title} onChange={onchange} required />
<div>
        <input type="text" placeholder="Body" title="postBody" value={postBody} onChange={onchange} required />
</div>
        <input type="submit" value={editGuest !== null ? 'Submit' : 'Post'} className="btn btn-danger" />
        {editGuest !== null ? < input onClick={clearEdit} type="button" className="btn clear" value="Cancel" /> : null}
      </form>

    </div>
  )
}

export default GuestForm



