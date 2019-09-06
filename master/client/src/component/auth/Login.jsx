import React, { Component } from "react";
import Text from "../Form/Text";
import { Button, Form, Container } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    }
  ];
  getFieldValue = field => {
    const newState = { ...this.state, ...field };
    console.log(newState);
    this.setState(newState);
  };
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = { email, password };
    this.props.login(data);
  };
  render() {
    let { errors } = this.state;

    return (
      <Container className="text-left">
        <h1>Login</h1>
        <Form onSubmit={this.onSubmit}>
          {this.dataForm.map((item, idx) => (
            <Text
              key={idx}
              item={item}
              value={this.state[item.name]}
              error={errors[item.name]}
              getFieldValue={this.getFieldValue}
            />
          ))}

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
  { login }
)(Login);
