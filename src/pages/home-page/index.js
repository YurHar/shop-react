import MainContent from "../../components/layout/main-content";
import {ImageCarousel} from "../../components/image-carousel";
import {Suggestion} from "../../components/suggestion";
import {Offer} from "../../components/offer";

export const HomePage = () => {
    return (
        <MainContent>
            <ImageCarousel />
            <Suggestion />
            <Offer />
        </MainContent>
    )
}