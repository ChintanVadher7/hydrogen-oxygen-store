import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const ItemBanner = ({ content }) => {
  return (
    <section className="common-wrarper bg-rose">
      <div className="coomon-list">
        <ul className="list-item">
          <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          >
            {content.map((res,index) => (
              <SwiperSlide key={index}>
                <li>{res}</li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  )
}

export default ItemBanner