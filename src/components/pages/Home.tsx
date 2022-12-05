import ContactForm from "../Contact";
import Portfolio from "../Portfolio";
import UserInfo from "../UserInfo";
import Map from '../Map';
import AboutSection from "./About";
import TestimonialSection from "./Testimonial";

const Home = () => {
    return (
        <div className="myfolio-main-container">            
            <div className="myfolio-left-panel">
                <div className="myfolio-top-panel">
                    <ContactForm></ContactForm>
                    <Map></Map>
                </div>
                <UserInfo></UserInfo>
                <div className="myfolio-bottom-panel">
                    <AboutSection />
                    <TestimonialSection />
                </div>
            </div>
            <Portfolio></Portfolio>
        </div>
    )
}
export default Home;