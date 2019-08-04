import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { connect } from "react-redux";
import * as action from "../../Action/actions";
import {SIZES} from "../../const"
class FilterSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: []
    };
  }
  changeCheckbox = e => {
    console.log(e);
    let sizes = this.state.sizes;
    if (!sizes.includes(e)) {
      sizes.push(e);
    } else {
      sizes.splice(sizes.indexOf(e), 1);
    }
    this.setState(
      {
        sizes: [...sizes]
      },
      () => {
        this.props.filterSize(this.state.sizes);
      }
    );
  };

  render() {
    let sizeLabel = SIZES.map((s, idx) => (
      <Checkbox key={idx} label={s} onChange={this.changeCheckbox} />
    ));
    return (
      <div className="filter filter--label">
        <h4 className="title">Sizes:</h4>

        {sizeLabel}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterSize: sizes => {
      dispatch(action.filterSize(sizes));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(FilterSize);
