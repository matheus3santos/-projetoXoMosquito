import LoginCard from "@/src/components/loginCard"
import styles from '@/styles/Login.module.css'
import Input from "../src/components/input/input"
import Button from "../src/components/button/button"
import Link from "next/link"
import axios from "axios"
import React from "react"













export default function CadastroPage(props){


    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(props.queixa ? "A queixa foi editada!" : "O usuario foi cadastrado!")

    const [names, setNome] = React.useState("")
    const [adress, setAdress] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [date, setData] = React.useState("")
    const [number, setNumber] = React.useState("")
    const [password, setPassword] = React.useState("")
   

    function registerUser() {
        const method = props.user ? "put" : "post"
        axios[method]("http://localhost:3008/api/user", {
            "id": props.user ? props.user.id : undefined,
            "nome": names,
            "email": email,
            "data": date,
            "endereco":adress,
            "telefone":number,
            "senha":password
        }).then(r => {
            alert(message)
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        })
    }

    React.useEffect(() => {
        if (props.queixa) {
            setNome(props.queixa.names)
            setAdress(props.queixa.adress)
            setEmail(props.queixa.email)
            setData(props.queixa.date)
            setNumber(props.queixa.number)
            setPassword(props.queixa.password)

        }
    }, [props.queixa])

    return(
        <div className={styles.background}>
            <LoginCard title={'Cria sua conta'}>
                    <form className={styles.form}>
                        <Input type='name' placeholder="Digite seu nome" />
                        <Input type='email' placeholder="Digite seu email" />
                        <Input type='date' placeholder="Data de Nascimento" />
                        <Input type='adress' placeholder="Digite seu endereço" />
                        <Input type='number' placeholder="Digite seu telefone" />
                        <Input type='password' placeholder="Digite sua senha" />
                        <Button onClick={()=> registerUser()}>Cadastrar</Button>
                        <Link href='/login'>Já possui uma conta? Se sim, clique aqui.</Link>
                    </form>
            </LoginCard>
        </div>
    )
}