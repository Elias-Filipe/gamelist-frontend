import api from '../../services/api';

import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay , Scrollbar, Mousewheel} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; 
import 'swiper/css/mousewheel'; 

import './style.css';

import { useNavigate } from 'react-router-dom';

function Carousel() {
    const navigate = useNavigate();

    const [games, setGames] = useState([]);

    const getGames = async () => {
        try {
            const response = await api.get(`/games`)
            setGames(response.data)
        } catch (error) {
            console.log("Erro ao buscar por lista de games", error)
        }
    }

    const handleCarouselClick = (id) => {
        navigate(`/game/${id}`);
    }

    useEffect(() => {
        getGames()
    }, []);

    return (
        <Swiper
            modules={[Navigation, Autoplay, Scrollbar, Mousewheel]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            mousewheel={{ hide: true}}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className='carousel'
        >
            {games.map((game) => (
            <SwiperSlide key={game.id}>
                <img src={game.imgUrl} alt={game.shortDescription} onClick={() => handleCarouselClick(game.id)}/>
            </SwiperSlide>
        ))}
        </Swiper>
    );
}

export default Carousel;