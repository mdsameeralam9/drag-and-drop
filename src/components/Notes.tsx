import React from 'react'
import Dialog from './Dialog'

const Notes = () => {
  const [renderNote, setRenderNote] = React.useState(false);
  
  return (
    <div className='notes'>

      {renderNote &&
       <Dialog />
      }
     
    </div>
  )
}

export default Notes