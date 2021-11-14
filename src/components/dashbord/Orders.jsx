import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { ApprovalTwoTone, Delete, ThumbUpAlt } from '@mui/icons-material';
import { toast } from 'react-toastify';


function preventDefault(event) {
    event.preventDefault();
}

export default function Orders({ records, currentUser }) {
    const [requests, setrequests] = React.useState(records);
    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Main Catogy</TableCell>
                        <TableCell>Sub Catogory</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell align="right">Net Bill</TableCell>
                        {currentUser[0].admin ? <TableCell align="right">Actions</TableCell> : null}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        requests.map((signleRecord) => {
                            return signleRecord.history.map((row,indx) => {
                                return <TableRow key={row.id}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{signleRecord.name}</TableCell>
                                    <TableCell>{row.catMain}</TableCell>
                                    <TableCell>{row.catSub}</TableCell>
                                    <TableCell>{row.paid}</TableCell>
                                    <TableCell align="right">{`$${row.netBill}`}</TableCell>
                                    {currentUser[0].admin ? <TableCell align="right"><Delete sx={{ ':hover': { cursor: 'pointer', color: 'red' } }} onClick={() => {
                                        requests[indx].history.splice(indx, 1);
                                        setrequests([...requests]);
                                        toast.error(`Order Deleted`, {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: 'colored'
                                        })
                                    }} />     <ThumbUpAlt sx={{ ':hover': { cursor: 'pointer', color: '#D0732A' } }} onClick={() => {
                                        toast.success(`Order Approved!`, {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: 'colored'
                                        })
                                    }} /></TableCell> : null}
                                </TableRow>
                            })
                        })
                    }
                </TableBody>
            </Table>
            {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
        </React.Fragment>
    );
}