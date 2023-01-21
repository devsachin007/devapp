import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Main extends React.Component {
    render() {
        return (
            <div>
                <h2>What we have.....</h2>
                <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                    <div>
                        <img src={require("./assets/1.jpg")} alt="" />
                        <p className="legend">We Have Software Developers </p>
                    </div>
                    <div>
                        <img src={require("./assets/2.jpg")} alt="" />
                        <p className="legend">We Have Data Science Engineers</p>
                    </div>
                    <div>
                        <img src={require("./assets/3.png")} alt="" />
                        <p className="legend">We Have AI/ML Engineers</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default Main