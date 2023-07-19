import React from "react"
import styles from "@/styles/Login.module.css"
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from "axios"
import LoginCard from "@/src/components/loginCard"
import InputRegister from "@/src/components/input/inputRegister"
import Button from "@/src/components/button/button"

import { useForm } from "react-hook-form"




export default function Historico(props){


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


   
    const [queixa, setQueixa] = React.useState([])
    const [queixaEditar, setQueixaEditar] = React.useState(false)
    console.log(queixa)


    React.useEffect(()=> {
        axios.get("http://localhost:3008/api/queixa").then(
            r=> {
                setQueixa(r.data.data)
            }
        )
    }, [])

    const deletarQueixa = async (id) => {
        await axios.delete("http://localhost:3008/api/queixa/" + id).then(
            r => {
                axios.get("http://localhost:3008/api/queixa/").then(
                    r=>{
                        setQueixa(r.data.data)
                    }
                )
            }
        )
    }

    const editar = async (data) => {
        console.log(data)
        
    }

     const [open, setOpen] = React.useState(false);
     const [message, setMessage] = React.useState(props.queixa ? "A queixa foi editada" : " ")








    return(
        
        <div className={styles.background2}>
        <h4>{props.texto}</h4>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell >ID</TableCell>
                        <TableCell >Endereço</TableCell>
                        <TableCell >Referência</TableCell>
                        <TableCell >Descrição</TableCell>
                        <TableCell >Opções </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {queixa && queixa.map((row, index)=>(
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{index + 1}</TableCell>
                            <TableCell component="th" scope="row">{row.adress}</TableCell>
                            <TableCell align="left">{row.reference}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell>
                                
                           
                               
                                <EditIcon color='primary' sx={{
                                    '&:hover':{
                                        color:'secondary',
                                        cursor:'pointer'
                                    }
                                }} onClick={() => setQueixaEditar(true)}/>
                                
                                
                                
                                
                                <DeleteIcon color='error' sx={{
                                    '&:hover':{
                                        color:'secondary',
                                        cursor:'pointer'
                                    }
                                }} onClick={() => deletarQueixa(row.id)}/>

                            </TableCell>
                    </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        {queixaEditar && (

            <LoginCard title={'Faça sua denuncia'}>
            <form onSubmit={handleSubmit(editar)} className={styles.form}>
                <InputRegister type='text' placeholder='Endereço' register={register} name="adress"/>
                <InputRegister type='text' placeholder='Referência' register={register} name="reference"/>
                <InputRegister type='text' placeholder='Descrição' register={register} name="description"/>
                <Button type="submit">Editar</Button>
            </form>
        </LoginCard>
            )}
    </div>

       
    )
}
