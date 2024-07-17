import React from 'react';
import './Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaTelegramPlane } from "react-icons/fa";
import { Container } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer-container' >
            <Container maxWidth='lg'>
                <div className='footer'>
                    <div className='footer-block'>
                        <div className='footer-info'>
                            <h1>Iluminous</h1>
                            <p>О нас</p>
                            <p>Блог</p>
                            <p>Вакансии</p>
                            <p>Акции</p>
                        </div>

                        <div className='footer-info'>
                            <h1>Помощь</h1>
                            <p>Вопросы и ответы</p>
                            <p>Контакты</p>
                        </div>

                        <div className='footer-info'>
                            <h1>Поддержка</h1>
                            <p>Мы всегда готовы вам помочь. <br />
                                Наши операторы онлайн 24/7</p>
                        </div>
                    </div>
                    <div className='footer-icons'>
                        <button className='phone'><FaPhoneAlt /></button>
                        <button className='phone'><GoMail /></button>
                        <button className='phone'><FaTelegramPlane /></button>
                    </div>
                    <div className='footer-button1'>
                        <button className='footer-button'>Написать в чате</button>
                    </div>
                    <div className='footer-down'>
                        <p>© 2015-2023 Illuminous</p>
                        <p>Пользовательские соглашения</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;