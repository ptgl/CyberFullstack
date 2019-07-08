import React, { Component } from "react";

class Item extends Component {
  render() {
    let {
      id,
      name,
      desc,
      priority,
      status,
      labelArr,
      memberIdArr
    } = this.props.data;

    let assignedTo = memberIdArr.map((o, idx) => (
      <img src={`./img/${o}.jpg`} key={idx} className="user" alt="true" />
    ));

    let labels = labelArr.map((o, idx) => {
      let color;
      switch (o.toLowerCase()) {
        case "frontend":
          color = "#389E0D"
          break;
        case "backend":
          color = "#722ED1";
          break;
        case "api":
          color = "#13C2C2"
          break;
        default:
          color = "red";
      }
      return <i className="fa fa-circle" style={{ color }} />;
    });

    return (
      <tr>
        <td className="text-center">{id}</td>
        <td className="text-center">{desc}</td>
        <td className="text-center">
          {labels}
        </td>
        <td
          className={`${
            priority === 1
              ? "text-info"
              : priority === 2
              ? "text-success"
              : "text-danger"
          } font-weight-bold text-center`}
        >
          {priority === 1 ? "Thấp" : priority === 2 ? "Trung Bình" : "Cao"}
        </td>
        <td className="text-center">{assignedTo}</td>
        <td className="text-center">
          <button type="button" className="btn btn-outline-primary">
            Sửa
          </button>
          <button type="button" className="btn btn-outline-success">
            Xong
          </button>
          <button type="button" className="btn btn-outline-danger">
            Xóa
          </button>
        </td>
        <td className="text-center">
          <i
            className={`fa ${
              status === 1 ? "fa-check-square-o" : "fa-square-o"
            } mr-2`}
          />
        </td>
      </tr>
    );
  }
}

export default Item;
