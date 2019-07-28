import React, { Component } from "react";

class FilterLabel extends Component {
  handleFilter = e => {
    console.log(e.target.innerText);
    //this.props.filter("label", e.target.innerText);
  };

  render() {
    let sizes = ["XS", "S", "M", "L", "ML", "L", "XL", "XXL"];
    let sizeLabel = sizes.map((s, idx) => (
      <div key={idx} className="filters-available-size">
        <label>
          <span onClick={this.handleFilter} className="checkmark">
            {s}
          </span>
        </label>
      </div>
    ));
    return (
      <div className="filter filter--label">
        <h4 class="title">Sizes:</h4>
        {sizeLabel}
        {/* <div className="filters-available-size">
          <label>
            <span onClick={this.handleFilter} className="checkmark">
              XS
            </span>
          </label>
        </div> */}
      </div>
    );
  }
}

export default FilterLabel;
