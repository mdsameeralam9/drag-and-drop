import React, { FC } from 'react';

export interface DroppableInterface{
  children: React.ReactNode
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void
}

const Droppable:FC<DroppableInterface> = ({children, onDrop}) => {
  return (
    <div  onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>{children}</div>
  )
}

export default Droppable