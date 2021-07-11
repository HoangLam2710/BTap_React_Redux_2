import React, { Component } from "react";
import Model from "../Model";
import GlassList from "../GlassList";
import "./style.css";

class Home extends Component {
    render() {
        return (
            <div
                className="container-fluid home-bg"
                style={{
                    background: "url(./assets/img/background.jpg)",
                }}
            >
                <h1>TRY GLASSES APP ONLINE</h1>
                <div className="overlay"></div>
                <div className="container wrapped">
                    <Model />
                    <GlassList />
                </div>
            </div>
        );
    }
}

export default Home;
