import { Link } from '@remix-run/react'
import React from 'react'

const ZigZag = ({ content }) => {
  return (
    <div className={`zigzag-wrapper flex items-center bg-light_brown-300`}>
      <div className={`lg:w-6/12 w-full ${content.index % 2 == 0 ? 'order-1' : 'order-2'}`}>
        <div className="zizage-img portrait">
          <img src={content.res.image.url} height="925" width="756" alt="zizage" className="h-auto w-full" />
        </div>
      </div>
      <div className={`lg:w-6/12 w-full ${content.index % 2 != 0 ? 'order-1' : 'order-2'}`}>
        <div className="zigzag-inner lgscreen:py-100 xsscreen2:py-55 xsscreen2:px-20">
          <div className="zigzag-content max-w-[476px] smscreen:!max-w-[316px] m-auto w-full">
            <div className="flex flex-col justify-center items-center gap-[55px] smscreen2:gap-[20px]">
              <div className="title title-black text-center">
                <h2 className='text-black text-[32px]'>
                  Meet Gulabi, a uniquely power-packed and gentle exfoliating mask that refreshes the skin.
                </h2>
              </div>
              <div className="content text-center">
                <p>
                  Packed with both Ayurvedic and clinically-researched ingredients, our Gulabi face mask exfoliates congested, dull skin and soothes it at the very same time. </p>
              </div>
              <div className="btn-custom mt-20">
                <Link style={{border:'1px solid black'}} to={'/'} className="btn btn-black btn-transparent">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZigZag