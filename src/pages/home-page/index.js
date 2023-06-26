import MainContent from "../../components/layout/main-content";
import {ImageCarousel} from "../../components/image-carousel";
import {Suggestion} from "../../components/suggestion";

export const HomePage = () => {
    return (
        <MainContent>
            <ImageCarousel />
            <Suggestion />
        </MainContent>
    )
}