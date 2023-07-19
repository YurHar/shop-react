import MainContent from "../../components/layout/main-content";
import { AboutUs } from "./AboutUs";
import { Services } from "./Services";
import { Maps } from './Maps'
import { Body } from "./Body"
import { Story } from "./Story"
export const About = () => {

    return (
        <>
            <MainContent>
                <AboutUs />
                <Services />
                <Body />
                <Story />
                <Maps />
            </MainContent>

        </>
    )
}