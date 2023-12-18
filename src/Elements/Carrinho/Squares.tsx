import React from 'react'

type SquaresType = {
    className: string;
}

function Squares( { children, className } : React.PropsWithChildren & SquaresType) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Squares