import React, { FC } from 'react';

//DragDropContext, Droppable, Draggable
export interface dragAndDropInterface{
  children: React.ReactNode
}

const DragDropContext:FC<dragAndDropInterface> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default DragDropContext