import Button from "@/src/components/button/button"
import Input from "@/src/components/input/input"
import Link from "next/link"
import styles from "@/styles/Login.module.css"
import LoginCard from "@/src/components/loginCard"
import stylesmain from "@/styles/Cadastro.module.css"
import axios from "axios"
import React from "react"


export default function Main(props){

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(props.queixa ? "A queixa foi editada!" : "A queixa foi cadastrada!")

    const [reference, setReference] = React.useState("")
    const [adress, setAdress] = React.useState("")
    const [description, setDescription] = React.useState("")
   

    function registerProduct() {
        const method = props.queixa ? "put" : "post"
        axios[method]("http://localhost:3008/api/queixa", {
            "id": props.queixa ? props.queixa.id : undefined,
            "endereco": adress,
            "descricao": description,
            "referencia": reference
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
            setAdress(props.queixa.adress)
            setDescription(props.queixa.description)
            setReference(props.queixa.reference)
        }
    }, [props.queixa])

    return(
        <div>
            <div className={styles.background}>
                <LoginCard title={'Faça sua denuncia'}>
                    <form className={styles.form}>
                        <Input type='name' value={adress} onChange={(e) => { setAdress(e.target.value) }} placeholder="Endereço" />
                        <Input type='text' value={reference} onChange={(e) => { setReference(e.target.value) }} placeholder="Referencia" />
                        <Input type='text'  value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Descrição do problema" />
                        <Button onClick={() => registerProduct()}>
                            {props.queixa ? "Denunciar" : "Salvar"}
                            </Button>

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