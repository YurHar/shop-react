import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../helpers/constant';

export const HoverableOptions = ({ changeCover, bringCoverBack, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${PATHS.PRODUCT_PAGE}`);
  };

  return (
    <>
      <img
        style={{ width: '60px', height: '70px' }}
        src={image.src}
        onMouseOver={() => changeCover(image.src)}
        onMouseOut={() => bringCoverBack()}
        onClick={handleClick}
      />
    </>
  );
};
