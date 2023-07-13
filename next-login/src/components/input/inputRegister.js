export default function InputRegister({ name, register, ...rest }) {
    return (
        <input className={styles.input} {...rest} {...register(name)} />
    )
}