import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class Model extends Component {
    render() {
        const { name, url, desc } = this.props.selectGlass || {};
        return (
            <div className="model__wrapped">
                <div
                    className="model"
                    style={{ background: "url(./assets/img/model.jpg)" }}
                >
                    {this.props.selectGlass && (
                        <>
                            <img src={url} alt="glass" />
                            <div className="content">
                                <h5>{name}</h5>
                                <p>{desc}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectGlass: state.glass.selectGlass,
    };
};

export default connect(mapStateToProps)(Model);
