import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Frontdesk() {
    
    return (
        <Container sx={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'primary',
            position: 'relative',
        }}>
            <Typography variant="h4" component="h1" gutterBottom>
                frontdesk
            </Typography>
        </Container>
    );
}