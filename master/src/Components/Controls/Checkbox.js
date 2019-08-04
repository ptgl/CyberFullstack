import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  toggleCheckboxChange = e => {
    this.setState({
      isChecked: !this.state.isChecked
    });
    this.props.onChange(e.target.value)
  };
  render() {
    let { label } = this.props;
    return (
      <div className="filters-available-size">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={this.state.isChecked}
            onChange={this.toggleCheckboxChange}
          />

          <span onClick={this.handleFilter} className="checkmark">
            {label}
          </span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
