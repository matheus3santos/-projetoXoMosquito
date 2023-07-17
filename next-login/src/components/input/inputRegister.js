import styles from './input.module.css'



export default function InputRegister({ name, register, ...rest }) {
    return (
        <input className={styles.input} {...rest} {...register(name)} />
    )
}