import React from "react"
import styles from "@/styles/Login.module.css"
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from "axios"
import useForm from "react-hook-form"





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

    const handleEditarQueixa = (prod) => {
        setQueixaEditar(prod)
    }

    const DeletarQueixa = (id) => {

        axios.delete("http://localhost:3008/api/queixa" + id).then(
            r => {
                axios.get("http://localhost:3008/api/queixa").then(
                    r=>{
                        setQueixa(r.data)
                    }
                )
            }
        )
    }

    


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
                                }} onClick={e => props.handleEditarQueixa(row)}/>
                                <DeleteIcon color='error' sx={{
                                    '&:hover':{
                                        color:'secondary',
                                        cursor:'pointer'
                                    }
                                }} onClick={() => DeletarQueixa(row.id)}/>

                            </TableCell>
                    </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>

       
    )
}