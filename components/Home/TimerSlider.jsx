import React from 'react'
// import TimerSliderItem from './subHome/TimerSlideItem'
import style from '../../styles/Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import BoxItem from '../Ui/BoxItem/BoxItem';
function TimerSlider({children, className, products=[]}) {
    return (
        <div className={style.timer_slider + " " + className}>
            <div className="row p-0">
            <div className='col-12 col-xl-3'>{children}</div>
                <div className="row col-12 col-xl-9">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={10}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={"px-2 mt-4 suggest_swiper"}
                    // modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween:10
                        },
                        920:{
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        1200:{
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                        1440:{
                            slidesPerView: 6,
                            spaceBetween: 20
                        },
                        
                    }}
                >
                {products.map((item, idx)=>{
                            return <SwiperSlide className="" key={idx}>
                                <BoxItem item={item}  />
                            </SwiperSlide>
                        })}
                </Swiper>
                    
                </div>
                
            </div>

        </div>
    )
}

export default TimerSlider