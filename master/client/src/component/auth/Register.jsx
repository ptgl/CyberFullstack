import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/auth";
import _ from "lodash";
import Text from "../Form/Text";
import Select from "../Form/Select";
import { Button, Form, Container } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      userType: "",
      DOB: "",
      phone: "",
      errors: {}
    };
  }

  dataForm = [
    {
      name: "email",
      type: "email",
      label: "Email"
    },
    {
      name: "password",
      type: "password",
      label: "Password"
    },
    {
      name: "password2",
      type: "password",
      label: "Confirm Password"
    },
    {
      name: "DOB",
      type: "date",
      label: "DOB"
    },
    {
      name: "phone",
      type: "text",
      label: "Phone"
    },
    {
      name: "userType",
      type: "select",
      label: "User Type",
      options: [
        { value: "driver", text: "Driver" },
        { value: "passenger", text: "Passenger" }
      ]
    }
  ];

  getFieldValue = field => {
    const newState = { ...this.state, ...field };
    console.log(newState)
    this.setState(newState);
  };

  formBuilder = data => {
    let { errors } = this.state;
    console.log(this.state);
    return data.map((item, idx) => {
      switch (item.type) {
        case "select":
          return <Select getFieldValue={this.getFieldValue} key={idx} item={item} value={this.state[item.name]} />;

        default:
          return (
            <Text
              key={idx}
              item={item}
              value={this.state[item.name]}
              error={errors[item.name]}
              getFieldValue={this.getFieldValue}
            />
          );
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = this.state;
    this.props.createUser(data);
  };

  componentWillReceiveProps = nextProps => {
    if (!_.isEmpty(nextProps.errors)) {
      this.setState({
        errors: nextProps.errors
      });
    }
  };

  render() {
    console.log(this.props.errors);
    return (
      <Container className="text-left">
        <h1>Register</h1>
        <Form onSubmit={this.onSubmit}>
          {this.formBuilder(this.dataForm)}

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = states => {
  return {
    errors: states.errors
  };
};

export default connect(
  mapStateToProps,
  { createUser }
)(Register);
