import React from 'react';
import { Box } from "@mui/material";
import './notfound.css'

export default function NotFound() {
    return (
        <Box>
            <h1>Error 404</h1>
            <h2>Nuestro Código se ha roto</h2>
            <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section class="error-container">
                <span>
                    <span>4</span> 
                </span>
                <span>0</span>
                <span>
                    <span>4</span>
                </span>
            </section>
            <div class="link-container">
                <a href="/" class="more-link">Volver al Inicio</a>
            </div>
        </Box>
    )
}