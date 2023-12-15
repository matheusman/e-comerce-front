import React from 'react'
import styles from './scss/Carroucel.module.scss'

export default function useCarroucel(img : unknown[], width : number) {

    const [index, setIndex] = React.useState(0)
    const [number, setNumber] = React.useState(0)

    function nextIndex () {
      console.log(index)
      if (img.length - 4 < 0) return setNumber(0)
      
      if (index + 1 > img.length - 4) {
        setIndex(img.length - 4)
        return number
      }
      setIndex(index + 1)
      return setNumber(number + width)
    }

      function prevIndex () {
      if (index - 1 < 0) {
            setIndex(0)
            return number
          }
          setIndex(index - 1)
          return setNumber(number - width)
        }

    return {nextIndex, prevIndex, index, number}
 
}