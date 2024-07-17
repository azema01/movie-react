import { Button, Container } from '@mui/material'
import Inte from '../../assets/png/Inte.png'
import './Interstellar.css'
import { Link } from 'react-router-dom'

const Interstellar = () => {
  return (
    <div>
      <Container maxWidth={'lg'} sx={{background: '#000000'}}>
        <img className='Inte-img' src={Inte} alt="Inte" style={{ width: '300px', height: '450px' }} />


        <div className='Inte'>
          
            <h3 className='Inte-h3'>Интерстеллар    2014</h3>

            <p className='p1'>Драма   Фантастика  Приключения 16+</p>

            <p className='inte-p'>Когда засуха, пыльные бури и вымирание растений <br />
              приводят человечество к продовольственному <br />
              кризису, коллектив исследователей и учёных...</p>

            <Button variant="container"
              component={Link}
              sx={{
                background: "#EF4234",
                color: "#fff",
                borderRadius: "36px",
                mb: '123px',
                ml: '300px',
                // mt: '210px'
              }}
            >Смотреть<img className="play-button" /></Button>

        </div>
      </Container>
    </div>
  )
}

export default Interstellar