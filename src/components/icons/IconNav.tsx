import React from 'react'

type iconNav = {
    icon : string;
    color? : string;
    className: string;
}

function IconNav( { icon, color, className } : iconNav ) {
  return (
    <div className={className}>
        <img src={icon}></img>
    </div>
  )
}

export default IconNav