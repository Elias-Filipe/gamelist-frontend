import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

function Comments({gameId}) {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    const getPost = async () => {
        try {
            const response = await api.get(`/posts/game/${gameId}`)
            setPosts(response.data)
        } catch (error) {
            console.error('Erro ao buscar dados dos posts:', error);
        }
    }

    useEffect(() => {
        getPost()
    }, [gameId])

    function goToHome() {
        navigate('/')
    }

    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={'4'}
                freeMode={true}
                scrollbar={{ draggable: true }}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className='posts'
            >

                {posts.map((post) => (
                    <SwiperSlide>
                        <div className='post-container' key={post.id}>
                            <h5 className='post-author'>{post.author}</h5>
                            <h3 className='post-title'>{post.title}</h3>
                            <p className='post-content'>{post.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
} export default Comments