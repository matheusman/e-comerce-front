import React from 'react'

type iconNav = {
    img : string;
    color? : string;
    className?: string;
    text?: string;
    onClick?: () => void;
    children? : React.ReactNode
  }

function IconNav( { img, color, className, text, children, ...props} : iconNav ) {
  return (
    <div className={className} {...props}>
        <img color={color} src={img} />
        {text && <p>{text}</p>}
        {children}
    </div>
  )
}

export default IconNav