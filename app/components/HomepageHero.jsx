import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from '@remix-run/react';

const HomepageHero = ({ homepageContent }) => {
    return (
        <div className='banner-swiper h-[950px] lgscreen:h-[600px] '>
            <Swiper speed={2500} className='h-full' slidesPerView={1}>
                {homepageContent.heroImageCollection.items.map((res, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ backgroundImage: `url(${res.url})` }} className="banner-img bg-cover bg-no-repeat h-full w-full absolute"></div>
                        <div className='flex flex-col items-center flex-wrap gap-[186px] lgscreen:gap-[96px] smscreen:gap-0 mdscreen2:gap-[55px] justify-between m-0 p-0 absolute top-[50%] smscreen2:top-[60%]  translate-x-minus_50 w-full '>
                            <div className="title text-center max-w-[672px] mx-auto w-full">
                                {
                                    index == 0 ?
                                        <h1 className='text-[35px]'>
                                            Inspired by centuries-old recipes, intentionally formulated for your skin today
                                        </h1> : ""
                                }
                                {
                                    index == 1 ?
                                        <h1 className='text-[35px]'>
                                          Meet Gulabi A rosy treat that truly treats your skin
                                        </h1> : ""
                                }
                                {
                                    index == 2 ?
                                        <h1 className='text-[35px]'>
                                            The best of all that we've sifted through,down to the very last ingredient
                                        </h1> : ""
                                }

                            </div>
                            <div className="btn-custom mt-[28px]">
                                <Link to={'/'} style={{color:'white'}} className="btn btn-transparent text-black">
                                    Shop aura
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HomepageHero