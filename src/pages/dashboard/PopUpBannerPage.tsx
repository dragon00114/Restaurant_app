import React, { ChangeEvent, useState, useRef  } from 'react';
import { Button, Box, Card, CardMedia, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useSnackbar } from '../../components/snackbar';



export default function PopUpBannerPage(){
    const { enqueueSnackbar } = useSnackbar();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
          const formData = new FormData();
          formData.append('image', selectedFile);
        //   const token = localStorage.getItem('accessToken');
          try {
            const response = await axios.post('http://localhost:3000/banner/upload', formData);
            enqueueSnackbar(response.data.message);
          } catch (error) {
            console.error(error);
          }
        }
    };

    const handleClick = () => {
        // fileInputRef.current.click();
    };
   

    return (
        <>
           <Box>
                
                <input
                type="file"
                accept="image/*"
                // style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
                />
                {selectedFile ? (
                    <IconButton color="primary" aria-label="upload" onClick={handleUpload}>
                        <SendIcon />
                    </IconButton>
                ) : (
                    <IconButton color="primary" aria-label="upload" onClick={handleClick}>
                        <CloudUploadIcon />
                    </IconButton>
                )}
                <Card>
                    {selectedFile ? (
                        <CardMedia image={URL.createObjectURL(selectedFile)} title="Selected Image" style={{height : '0', paddingTop: '26.25%'}} />
                    ) : (
                        <CardMedia image="/uploads/1688914816837-CROPPED_profile_logo_TRVJO_b320f720cf71907c92e9688fc9753ede.webp" title="Placeholder Image" />
                    )}
                </Card>
                
            </Box>
        </>
    )
}