import { useLocation } from "react-router-dom";
import { Electronics } from "./electronics";
import { Jewelery } from "./jewelery";
import MainContent from "../../../components/layout/main-content";

export const Hoodie = () => {
  const location = useLocation();

  return (
    <MainContent>
      {location.state === 1 ? <Electronics /> : <Jewelery />}
    </MainContent>
  );
};
