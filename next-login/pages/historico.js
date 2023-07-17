import React from "react"
import styles from "@/styles/Login.module.css"
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from "axios"
import LoginCard from "@/src/components/loginCard"
import InputRegister from "@/src/components/input/inputRegister"
import Button from "@/src/components/button/button"





export default function Historico(props){



    const [queixa, setQueixa] = React.useState([])
    const [queixaEditar, setQueixaEditar] = React.useState(undefined)


    React.useEffect(()=> {
        axios.get("http://localhost:3008/api/queixa").then(
            r=> {
                setQueixa(r.data.data)
            }
        )
    }, [])

    const deletarQueixa = (id) => {
        axios.delete("http://localhost:3008/api/queixa/" + id).then(
            r => {
                axios.get("http://localhost:3008/api/queixa/").then(
                    r=>{
                        setQueixa(r.data)
                    }
                )
            }
        )
    }

    const editar = async (data) => {
        data.preventDefault();

        axios.put("http://localhost:3008/api/queixa/" + queixaEditar.id, post).then(


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
                                }} onClick={() => queixaEditar(row)}/>
                                
                                
                                
                                
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
        <LoginCard title={'Faça sua denuncia'}>
            <form className={styles.form}>
                <input type='text' placeholder='Endereço' name="adress"/>
                <input type='text' placeholder='Referência' name="reference"/>
                <input type='text' placeholder='Descrição' name="description"/>
                <Button type="submit">Editar</Button>
            </form>
        </LoginCard>
    </div>

       
    )
}