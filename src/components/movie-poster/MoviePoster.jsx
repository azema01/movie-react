

import {useSelector} from 'react-redux'

const MoviePoster = ({Block,  Fon}) => {
    return (
        <>
            <img src={Fon} alt="fon" className='background-image' />
            <div className='content'>
                <img className='block-1' src={Block} alt="block-1" />
                <div className='text-content'>
                    <h2 className='text-h2'>Интерстеллар</h2>
                    <div className='text-info'>
                        <p className='text-p'>2014 </p>
                        <p className='text-p'>18+</p>
                        <p className='text-p'>США</p>
                        <p className='text-p'>Драма</p>
                        <p className='text-p'>Фантастика</p>
                        <p className='text-p'>Приключения</p>
                    </div>
                    <p className='block-p'>
                        Когда засуха, пыльные бури и вымирание растений приводят <br />
                        человечество к продовольственному кризису, коллектив <br />
                        исследователей и учёных отправляется сквозь червоточину...
                    </p>
                </div>
            </div>
        </>
    )
}

export default MoviePoster