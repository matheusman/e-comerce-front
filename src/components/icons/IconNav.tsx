import React from 'react'

type iconNav = {
    img : string;
    color? : string;
    className?: string;
    text?: string;
    onClick?: () => void;
  }

function IconNav( { img, color, className, text, ...props} : iconNav ) {
  return (
    <div className={className} {...props}>
        <img color={color} src={img} />
        {text && <p>{text}</p>}
    </div>
  )
}

export default IconNav