import React from "react"

type InputType = keyof RegexObj | undefined | null;


type regex = {
    message : string;
    regex: RegExp;
}

type RegexObj = {
    nome : regex,
    sobrenome: regex,
    email: regex,
    password: regex,
    cep: regex,
    cpf: regex,
    cnpj: regex,
    telefone: regex,
    
}

export default function useInput (  input : InputType | undefined) {

    const regex : RegexObj = {
    nome : {
        regex: /\w/gi,
        message : "Coloque somente letras"
    }, 
    sobrenome : {
        regex: /\w/gi,
        message : "Coloque somente letras"
    },
    email : {
        regex:  /[\w.-]+@[\w-]+\.[\w-.]+/gi,
        message : "Coloque um email valido"
    },
    password : {
        regex:  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
        message : "Coloque uma senha valido"
    },
    cep : {
        regex: /\d{5}[-\s]?\d{3}/g,
        message: "Coloque um cep valido"
    },
    cpf : {
        regex:  /(?:\d{3}[-.]?){3}\d{2}/g,
        message: "Coloque um cpf valido"
    },
    cnpj : {
        regex: /\d{2}[-.]?(?:\d{3}[-.]?){2}[-/]?\d{4}[-.]?\d{2}/g,
        message: "Coloque um cnpj valido"

    },
    telefone : {
        regex: /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g,
        message: "Coloque um telefone valido"
    }
}

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState<null | string>(null)

    function validate (value : string) {
        if (input === undefined || input === null) return true
        if (value.length === 0) {
            setError("Preencha este formulario")
            return false
        }
        if (input && regex[input] ) {
            if (regex[input].regex.test(value) === false) {
                if (regex[input].regex.test(value)) {
                    setError(null)
                    return true
                }
                setError(regex[input].message)
                return false
            }
        }
        return true
    }
    
    const onBlur : React.FocusEventHandler<HTMLInputElement> = event => {
        
        if (validate(value)) {
            setError(null)
        }
    }

    const onChange : React.ChangeEventHandler<HTMLInputElement> = event => {
        setValue(event.target.value)
    }

    return {value, onChange, onBlur, validate, error}
}