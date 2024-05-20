import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Deal() {
    
    return (
        <Container sx={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'primary',
            position: 'relative',
        }}>
            <Typography variant="h4" component="h1" gutterBottom>
                deal
            </Typography>
        </Container>
    );
}