import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import GlassItem from "../GlassItem";

class GlassList extends Component {
    render() {
        return (
            <div className="glassList">
                {this.props.glassList.map((item) => {
                    return <GlassItem key={item.id} prod={item} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        glassList: state.glass.glassList,
    };
};

export default connect(mapStateToProps)(GlassList);
