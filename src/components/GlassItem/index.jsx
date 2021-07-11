import React, { Component } from "react";
import { connect } from "react-redux";
import { actionTypes } from "../../store/actions/type";

class GlassItem extends Component {
    changeGlass = () => {
        this.props.dispatch({
            type: actionTypes.CHANGE_GLASS,
            payload: this.props.prod,
        });
    };

    render() {
        const { name, url } = this.props.prod;
        return (
            <button className="btn" onClick={this.changeGlass}>
                <img src={url} alt={name} />
            </button>
        );
    }
}

export default connect()(GlassItem);
