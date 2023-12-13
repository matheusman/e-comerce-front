import React from 'react'

type PixTextDecorator = {
    text: string
}

function Pix({ text } : PixTextDecorator ) {
  return (
    <div>{text}</div>
  )
}

export default Pix