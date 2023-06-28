import {Carousel} from 'antd';
import {FASHION_IMAGES} from "./constant";

const contentStyle = {
    width: '90%',
    height: '700px',
    margin: '0 auto',
};

export const ImageCarousel = () => (
    <Carousel autoplay>
        {FASHION_IMAGES.map((item, index) => {
            return (
                <div>
                    <img src={item.path} key={item.id} style={contentStyle} alt=""/>
                </div>
            )
        })}
    </Carousel>
);