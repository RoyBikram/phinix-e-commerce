import React from "react";
import {SponsorSwiperContainer} from './SponsorSwiperStyle'
import {ReactComponent as Sponsor1} from '../../res/sponsor/sponsor_1.svg'
import {ReactComponent as Sponsor2} from '../../res/sponsor/sponsor_2.svg'
import {ReactComponent as Sponsor3} from '../../res/sponsor/sponsor_3.svg'
import {ReactComponent as Sponsor4} from '../../res/sponsor/sponsor_4.svg'
// import {ReactComponent as Sponsor5} from '../../res/sponsor/sponsor_5.svg'
// import { ReactComponent as Sponsor6 } from '../../res/sponsor/sponsor_6.svg'

export default function SponsorSwiper() {
    return (
        <SponsorSwiperContainer>
            <div className="SponsorContainer">
            <Sponsor1 className="Sponsor "></Sponsor1>
                
            </div>
            <div className="SponsorContainer">
            <Sponsor2 className="Sponsor "></Sponsor2>

            </div>
            <div className="SponsorContainer">
            <Sponsor3 className="Sponsor Sponsor3"></Sponsor3>

            </div>
            <div className="SponsorContainer">
            <Sponsor4 className="Sponsor Sponsor4"></Sponsor4>

            </div>
        </SponsorSwiperContainer>
    )
}










// import './SponsorSwiperStyle.css'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.css";
// import SwiperCore, { Autoplay } from "swiper";
// SwiperCore.use([Autoplay]);

// export default function SponsorSwiper() {
//     return (
//         <div className="SponsorSwiper">
//             <Swiper
//                 slidesPerView={4}
//                 spaceBetween={30}
//                 // loop={true}
//                 observer={true}
//                 observerParent={true}
//                 autoplay={{
//                     delay: 5000,
//                     disableOnInteraction: true,
//                 }}
                
//                 className="Swiper"
//             >
//                 <SwiperSlide className="Slide">
//                     <Sponsor1 className="Sponsor"></Sponsor1>
//                 </SwiperSlide>
//                 <SwiperSlide className="Slide">
//                     <Sponsor2 className="Sponsor"></Sponsor2>
//                 </SwiperSlide>
//                 <SwiperSlide className="Slide">
//                     <Sponsor3 className="Sponsor Sponsor3"></Sponsor3>
//                 </SwiperSlide>
//                 <SwiperSlide className="Slide">
//                     <Sponsor4 className="Sponsor Sponsor4"></Sponsor4>
//                 </SwiperSlide>
//                 <SwiperSlide className="Slide">
//                     <Sponsor5 className="Sponsor"></Sponsor5>
//                 </SwiperSlide>
//                 <SwiperSlide className="Slide">
//                     <Sponsor6 className="Sponsor Sponsor6"></Sponsor6>
//                 </SwiperSlide>
                
//             </Swiper>
//         </div>
//     );
// }
