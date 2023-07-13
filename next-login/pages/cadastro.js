import LoginCard from "@/src/components/loginCard"
import styles from '@/styles/Login.module.css'
import InputRegister from "../src/components/input/inputRegister"
import Button from "../src/components/button/button"
import Link from "next/link"
import axios from "axios"
import React from "react"

import { useForm } from "react-hook-form"

export default function CadastroPage(props) {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        axios.post("http://localhost:3008/api/user", data).then(r => {
            alert(message)
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        })
    }

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(props.queixa ? "A queixa foi editada!" : "O usuario foi cadastrado!")

    return (
        <div className={styles.background}>
            <LoginCard title={'Cria sua conta'}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <InputRegister type='text' register={register} name="name" />
                    <InputRegister type='text' register={register} name="email" />
                    <InputRegister type='text' register={register} name="data" />
                    <InputRegister type='text' register={register} name="adress" />
                    <InputRegister type='number' register={register} name="telefone" />
                    {/* <Input type='password' placeholder="Digite sua senha" /> */}
                    <Button type="submit">Cadastrar</Button>
                    <Link href='/login'>Já possui uma conta? Se sim, clique aqui.</Link>
                </form>
            </LoginCard>
        </div>
    )
}