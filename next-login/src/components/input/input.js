import styles from './input.module.css'

export default function Input({ name, register, ...rest }) {
    return (
            <input className={styles.input}{...rest} />
    )
}