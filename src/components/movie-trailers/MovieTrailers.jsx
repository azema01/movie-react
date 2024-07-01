import React from 'react';
import './MovieTrailers.css';
import cocmos1 from "../../assets/png/cosmos1.png"
import cocmos2 from "../../assets/png/cosmos2.png"
import cocmos3 from "../../assets/png/cosmos3.png"
import { Container } from '@mui/material';

const MovieTrailers = () => {
    return (
        <div className='container-trailers'>
            <Container maxWidth="lg" 
            sx={{background: "#black" }}>
                <div className='trailers-cl'>
                    <h2 className='trailers'>Трейлеры</h2>
                    <div className='cocmos'>
                        <img src={cocmos1} alt="cocmos1" />
                        <img src={cocmos2} alt="cocmos2" />
                        <img src={cocmos3} alt="cocmos3" />
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default MovieTrailers;
