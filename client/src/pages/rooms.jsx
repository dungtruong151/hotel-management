import React from 'react';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { blue, grey } from '@mui/material/colors';

export default function Rooms() {
    return (
        <Container sx={{
            width: '100%',
            height: '83vh',
            backgroundColor: 'primary',
            position: 'relative',
        }}>
            <p style={{color: grey[400]}}>Room</p>
            <div style={{margin: '30px 0 20px 0'}}>
                <div style={{float: 'right'}}>
                    <Button variant="contained" sx={{borderRadius: '7px'}}>Add room</Button>
                </div>
                <Button 
                    variant="outlined" 
                    href="" 
                    sx={{borderRadius: '100px', backgroundColor: blue[50], color: blue[700], borderColor: blue[700] }}
                >
                    All room(100)
                </Button>
                <Button variant="outlined" href="" sx={{borderRadius: '100px', margin: '0 10px', color: grey[700], borderColor: grey[700], }} >
                    Available room(20)
                </Button>
                <Button variant="outlined" href="" sx={{borderRadius: '100px', margin: '0 10px', color: grey[700], borderColor: grey[700], }} >
                    Booked(80)
                </Button>
            </div>
            
            {/* <DataTable /> */}
        </Container>
    );
}