import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    console.log("constructor",props.data.status)
    super(props);
    this.state = {
      selectedStatus: props.data.status
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.state = {
      selectedStatus: nextProps.data.status
    };
  
  }

  handleChangeStatus = e =>{
    //console.log(e.target.value);
    this.props.changeProgressStatus(this.props.data.id, e.target.value);
    this.setState({
      selectedStatus: e.target.value
    })
  }

  handleEditing = task => {
    this.props.openModal("edit", task);
  };

  getProgressIcon = number => {
    debugger
    switch (+number) {
      case 1:
        return "fa-hourglass-start";
      case 2:
        return "fa-anchor";
      case 3:
        return "fa-check-square-o";
      case 4:
        return "fa-trash-o";

      default:
        return "";
    }
  };

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
      //set label color
      switch (o.toLowerCase()) {
        case "frontend":
          color = "#389E0D";
          break;
        case "backend":
          color = "#722ED1";
          break;
        case "api":
          color = "#13C2C2";
          break;
        default:
          color = "red";
      }
      return <i key={idx} className="fa fa-circle" style={{ color }} />;
    });

    return (
      <tr>
        <td className="text-center">{id}</td>
        <td className="text-center">{name}</td>
        <td className="text-center">{labels}</td>
        <td
          className={`${
            priority === "low"
              ? "text-info"
              : priority === "high"
              ? "text-danger"
              : "text-success"
          } font-weight-bold text-center`}
        >
          {priority === "low"
            ? "Thấp"
            : priority === "high"
            ? "Cao"
            : "Trung Bình"}
        </td>
        <td className="text-center">{assignedTo}</td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-outline-primary"
            data-toggle="modal"
            data-target="#modalTask"
            onClick={() => this.handleEditing(this.props.data)}
          >
            Sửa
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => this.props.deleteTask(this.props.data)}
          >
            Xóa
          </button>

          <div className="form-group" style={{width:"170px", margin:"0 auto"}}>
            <select className="form-control" value={this.state.selectedStatus} name="status" onChange={this.handleChangeStatus} id="status">
              <option value={-1}>Chọn tình trạng</option>
              <option value={1}>Bắt đầu</option>
              <option value={2}>Tạm ngưng</option>
              <option value={3}>Hoàn thành</option>
              <option value={4}>Hủy bỏ</option>
            </select>
          </div>
        </td>
        <td className="text-center">
          <i className={`fa ${this.getProgressIcon(this.state.selectedStatus)}  mr-2`} />
        </td>
      </tr>
    );
  }
}

export default Item;
