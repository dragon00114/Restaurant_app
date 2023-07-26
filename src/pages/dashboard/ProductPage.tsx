import React, { useState, useEffect } from 'react';
import { Table, Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Modal, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// import FormProvider, {
//     RHFSwitch,
//     RHFSelect,
//     RHFTextField,
//     RHFUploadAvatar,
// } from '../../components/hook-form';

type RowData = {
    id: number;
    name: string;
};


export default function ProductPage(){

    const [data, setData] = useState<RowData[]>([
        { id: 1, name: 'Shoe'},
        { id: 2, name: 'Trousers' }
    ]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNameChange = (id: number, newName: string) => {
        setData((prevData) =>
        prevData.map((row) => (row.id === id ? { ...row, name: newName } : row))
        );
    };

    const handleAddRow = () => {
        const newId = data.length + 1;
        const newRow: RowData = {
          id: newId,
          name: '',
        };
        setData((prevData) => [...prevData, newRow]);
      };
    
    const handleRemoveRow = (id: number) => {
        setData((prevData) => prevData.filter((row) => row.id !== id));
    };
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                <IconButton color="primary" aria-label="add" onClick={handleAddRow}>
                    <AddIcon />
                </IconButton>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell /> 
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>
                                <TextField
                                value={row.name}
                                onChange={(e) => handleNameChange(row.id, e.target.value)}
                                />
                            </TableCell>
                            <TableCell>
                            <IconButton color="primary" aria-label="delete" onClick={handleClose}>
                                <DeleteIcon />
                            </IconButton>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                <IconButton color="primary" aria-label="delete" onClick={handleOpen}>
                    <AddIcon />
                </IconButton>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={{ width: 400, bgcolor: 'background.paper', p: 2, position: 'relative',  margin : 'auto', top : '35%' }}>
                        {/* Add your modal content here */}
                        <h2>Product Item</h2>
                        <p>This is a beautiful modal!</p>
                        <IconButton color="primary" aria-label="delete" onClick={handleClose}>
                            <DeleteIcon />
                        </IconButton>
                        <Button variant="contained" onClick={handleClose}>
                            Close
                        </Button>
                    </Box>
                </Modal>
                </Grid>
            </Grid>
        </>
    )
}