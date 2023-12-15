import React from "react"

export default function useInput () {
    const [value, setValue] = React.useState('')

    const onChange : React.ChangeEventHandler<HTMLInputElement> = event => {
        setValue(event.target.value)
    }

    return {value, onChange}
}