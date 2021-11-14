import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Delete } from '@mui/icons-material';

export default ({ records, currentUser }) => {
const [customers, setcustomers] = React.useState(records)

    return (
        <React.Fragment>
            <Title>Customers List</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Order History</TableCell>
                        {currentUser[0].admin ? <TableCell align="right">Actions</TableCell> : null}

                    </TableRow>
                </TableHead>
                <TableBody>
                    { customers.map((signleRecord, indx) => {
                            return <TableRow key={signleRecord.id}>
                                <TableCell>{signleRecord.name}</TableCell>
                                <TableCell>{signleRecord.email}</TableCell>
                                <TableCell>{signleRecord.pass}</TableCell>
                                <TableCell>{signleRecord.history.length}</TableCell>
                                {currentUser[0].admin ? <TableCell align="right"><Delete sx={{ ':hover': { cursor: 'pointer', color: 'red' } }} onClick={() => {
                                    customers.splice(indx, 1);
                                    setcustomers([...customers]);
                                }} /></TableCell> : null}
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>

        </React.Fragment>
    );
}