import styles from './scss/Select.module.scss'

type SelectOptions = {
    option : string[];
    className? : string;
    label: string;
    attr?: keyof HTMLSelectElement;
}


function Select( { option, className, label, ...attr  } : SelectOptions) {
  return (
    <label className={className ? className : styles.select} >
        {label}
        <select  {...attr}>
            {option.map( values => <option value={values} key={values}>{values}</option>)}
        </select>
    </label>
  )
}

export default Select