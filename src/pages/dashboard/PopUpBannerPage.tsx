import React, { ChangeEvent, useState, useRef, useEffect  } from 'react';
import { Button, Box, Card, CardMedia, IconButton, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { PATH_DASHBOARD } from '../../routes/paths';

import { useSnackbar } from '../../components/snackbar';



export default function PopUpBannerPage(){
    const { enqueueSnackbar } = useSnackbar();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [ banner, setBanner ] = useState();
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    };

    useEffect(() => {
        async function getBanner() {
            try{
                const response = await axios.get('http://localhost:3000/get-banner');
                console.log(response.data);
                
            }catch(err){
                console.log(err);
            }
        }
    }, []);

    const handleUpload = async () => {
        if (selectedFile) {
          const formData = new FormData();
          formData.append('image', selectedFile);
      
          const token = localStorage.getItem('accessToken');
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            }
          };
      
          try {
            const response = await axios.post('http://localhost:3000/banner/upload', formData, config);
            enqueueSnackbar(response.data.message);
          } catch (error) {
            console.error(error);
          }
        }
      };

    const handleClick = () => {
        // fileInputRef.current.click();
    };

    const { themeStretch } = useSettingsContext();
   

    return (
        <>
            <Helmet>
                <title> Ecommerce: Create a new product | Minimal UI</title>
            </Helmet>
            <Container maxWidth={themeStretch ? false : 'lg'}>
                <CustomBreadcrumbs
                heading="Create a new Banner"
                links={[
                    { name: 'Dashboard', href: PATH_DASHBOARD.root },
                    {
                    name: 'Extra',
                    href: PATH_DASHBOARD.extra.root,
                    },
                    { name: 'Banner' },
                ]}
                />
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
            </Container>
           
        </>
    )
}