import React, {useEffect,useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';



type RowData = {
    _id: number;
    firstName: String;
    lastName: String;
    country: String;
    address: String;
    city: String;
    state: String;
    isPublic: String;
    phoneNumber: String;
    about: String;
    zipCode: String;
    email : String;
    displayName : String;
  };


export default function MembershipListPage(){
    const [data, setData] = useState<RowData[]>();
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        fetch('http://localhost:3000/auth/get-users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => response.json())
        .then(res=>{
            console.log(res.user);
            setData(res.user);
        })
    },[])

      const handleNameChange = (id: String, newName: string) => {
        // setData((prevData) =>
        //   prevData.map((row) => (row._id === _id ? { ...row, name: newName } : row))
        // );
      };
    
      const handleAgeChange = (id: number, newAge: number) => {
        // setData((prevData) =>
        //   prevData.map((row) => (row._id === _id ? { ...row, age: newAge } : row))
        // );
      };

      const handleAddRow = () => {
        const newId = Date.now();
        const newRow: RowData = {
          _id: newId,
          firstName: '',
          lastName: '',
          country: '',
          city: '',
          zipCode: '',
          state: '',
          isPublic: '',
          about: '',
          address: '',
          phoneNumber : '',
          email : '',
          displayName : ''
        };
        setData((prevData) => {
            const newData = prevData ? [...prevData] : [];
            newData.push(newRow);
            return newData;
          });
      };
    
      const handleRemoveRow = (id: number) => {
        // setData((prevData) => prevData.filter((row) => row._id !== id));
      };
      
    const [initialValue, setInitialValue] = useState();
    const thead = ["Name","Email", "Address",]
    
    

    return(
        <TableContainer component={Paper}>
            <Button variant="contained" onClick={handleAddRow}>
                Add Row
            </Button>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Zipcode</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Is Public</TableCell>
                    <TableCell>Action</TableCell> 
                </TableRow>
                </TableHead>
                <TableBody>
                {data?.map((row) => (
                    <TableRow key={row._id}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>
                        <TextField
                        value={row.displayName}
                        // onChange={(e) => handleNameChange(row._id, Number(e.target.value))}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField

                        value={row.email}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.address}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.state}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.city}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.zipCode}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.country}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.phoneNumber}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.isPublic}
                        // onChange={(e) => handleAgeChange(row._id, e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <Button variant="outlined" onClick={() => handleRemoveRow(row._id)}>
                        Remove
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
