import LoginCard from "@/src/components/loginCard"
import styles from '@/styles/Login.module.css'
import Input from "../src/components/input/input"
import Button from "../src/components/button/button"
import Link from "next/link"



export default function LoginPage(){
    return(
        <div className={styles.background}>
                <LoginCard title="Faça o login">
                    <form className={styles.form}>
                        <Input type='email' placeholder="Digite seu email" />
                        <Input type='password' placeholder="Digite sua senha" />
                        <Button>
                            <Link href='/main'>
                            Entrar na conta
                                
                            </Link>
                        </Button>
                        <Link href='/cadastro'>
                            Criar uma conta
                        </Link>
                        
                    </form>
                   
                </LoginCard>
        </div>
    )
}