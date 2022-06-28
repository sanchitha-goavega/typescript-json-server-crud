import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import IValues from '../../models/types';
import designationServices from '../../services/designation.services';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    marginRight: {
        marginRight: 10
    } 
});


export default function SimpleTable() {
    const classes = useStyles();
    const [data, setData] = useState([] as IValues[]);
    useEffect(() => {
        designationList();
    }, []);
    const designationList = async () => {
        const response = await designationServices.getData();
        setData(response);
    }
    const deleteDesignation = async (event: any, id: number) => {
        event.persist();
        await designationServices.deleteData(`${id}`).then(data=> {
            designationList();
        })
    }


    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Code</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(response => (
                        <TableRow key={response.title}>
                            <TableCell component="th" scope="row">
                                {response.title} 
                            </TableCell>                    
                            <TableCell align="right">
                                {response.code}
                            </TableCell>
                            <TableCell align="right">
                                <Link to={`edit/${response.id}`}> <EditIcon className={classes.marginRight} /> </Link>
                            </TableCell>
                            <TableCell align="right">
                                <DeleteIcon onClick={e => deleteDesignation(e, response.id)} /> 
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
