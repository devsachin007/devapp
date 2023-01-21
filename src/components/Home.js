import {Carousel} from "react-responsive-carousel";
import img from './assets/pic1.jpg'
import Navbar from "./Navbar";
import Main from "./Main";
import './home.css'
export const Home=()=>{
    return(
        <>
        <Navbar/>
            <Main/>
            <div className="body-content">
                <h1>Hire highly skilled freelancing software developers and Web Developers here</h1>
            </div>
            <div className="description">
                <h3>Vist our Contact Page and leave a message.</h3>
            </div>
        </>
    );
}