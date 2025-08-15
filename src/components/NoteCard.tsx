import React from 'react'

const NoteCard = ({title="hello", content="world"}) => {
  return (
    <div className='noteCard' draggable>
        <h2>{title}</h2>
         <p>{content}</p>
    </div>
  )
}

export default NoteCard