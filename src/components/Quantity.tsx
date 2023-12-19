import React from 'react'
import plus from '../assets/svg/mias 1.svg'
import undred from '../assets/svg/undred.svg'
import styles from './scss/Quantity.module.scss'
import IconNav from './IconNav'

type QuantityType = {
    className?: string;
}

function Quantity( { className } : QuantityType ) {

    const [quantityValue, setQuatityValue] = React.useState(1)

    function next () {
        setQuatityValue(quantityValue + 1)
    }

    function prev () {
        if (quantityValue > 1) {
            setQuatityValue(quantityValue - 1)
        }
    }

  return (
        <div className={className ? className : styles.quantityInterage}>
            <IconNav img={undred} onClick={() => {
                prev()
            }} />
            <p>{quantityValue}</p>
            <IconNav img={plus} onClick={ () => {
                next()
            }}/>
        </div>
  )
}

export default Quantity