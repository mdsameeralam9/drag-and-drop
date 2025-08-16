import React, { FC } from 'react'

export interface DraggableInterface{
  children: React.ReactNode
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void
}

const Draggable:FC<DraggableInterface> = ({children, onDragStart }) => {
  return (
    <div draggable onDragStart={onDragStart}>{children}</div>
  )
}

export default Draggable