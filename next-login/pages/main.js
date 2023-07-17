import Button from "@/src/components/button/button"
import Input from "@/src/components/input/input"
import Link from "next/link"
import styles from "@/styles/Login.module.css"
import LoginCard from "@/src/components/loginCard"
import stylesmain from "@/styles/Cadastro.module.css"
import axios from "axios"
import React from "react"
import InputRegister from "@/src/components/input/inputRegister"

import { set, useForm } from "react-hook-form"


export default function Main(props){

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios.post("http://localhost:3008/api/queixa", data).then(r => {
            alert(message)
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        })
    }


    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(props.queixa ? "A queixa foi editada!" : "A queixa foi cadastrada!")

    return(
        <div>
            <div className={styles.background}>
                <LoginCard title={'Faça sua denuncia'}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <InputRegister type='text' placeholder='Endereço' register={register} name="adress"/>
                        <InputRegister type='text' placeholder='Referência' register={register} name="reference"/>
                        <InputRegister type='text' placeholder='Descrição' register={register}  name="description"/>
                        <Button type="submit">Registrar queixa</Button>

                        <Button>
                        <Link href='/historico'>
                            Historico
                            </Link>
                            </Button>
                        <Link href='/login'>Logout</Link>
                    </form>
                </LoginCard>
            </div>
        </div>
    )
}