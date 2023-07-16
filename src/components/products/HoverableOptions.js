import { Link } from "react-router-dom";
import { PATHS } from "../../helpers/constant";

export const HoverableOptions = ({ changeCover, bringCoverBack, image }) => {
  return (
    <>
      <Link to={PATHS.FAKE_PRODUCT} state={{ state: image }}>
        <img
          style={{ width: "60px", height: "70px" }}
          src={image.src}
          onMouseOver={() => changeCover(image.src)}
          onMouseOut={() => bringCoverBack()}
        />
      </Link>
    </>
  );
};
