import {Carousel} from 'antd';
import {FASHION_IMAGES} from "./constant";

const contentStyle = {
    width: '85%',
    height: '700px',
    margin: '0 auto',
};

export const ImageCarousel = () => (
    <Carousel autoplay>
        {FASHION_IMAGES.map((item, index) => {
            return (
                <div key={item.id}>
                    <img src={item.path} key={item.id} style={contentStyle} alt=""/>
                </div>
            )
        })}
    </Carousel>
);