import './style.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

function HomeLists({ type }) {

    const navigate = useNavigate();
    const [itens, setItens] = useState([]);

    const getHomeLists = async () => {
        if (type == "categories") {
            try {
                const response = await api.get("/lists")
                setItens(response.data)
            } catch (error) {
                console.error("Erro ao buscar por lista de categorias", error)
            }

        } else if (type == 'games') {
            try {
                const response = await api.get(`/games`)
                setItens(response.data)
            } catch (error) {
                console.log("Erro ao buscar por lista de games", error)
            }
        }
    }

    const handleHomeListClick = (Id) => {
        if (type == "categories") {
            navigate(`/category/${Id}`);
        } else if (type == "games") {
            navigate(`/game/${Id}`);
        }
    }

    useEffect(() => {
        getHomeLists();
    }, [type]);

    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={'4'}
                freeMode={true}
                scrollbar={{ draggable: true }}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className='homelists'
            >

                {itens.map((item) =>
                    <SwiperSlide key={item.id}>
                        <div className='homelist-item' onClick={() => handleHomeListClick(item.id)}>
                            {type == "categories" ? item.name : item.title}
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}
export default HomeLists;