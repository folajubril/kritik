import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

export default class AddUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onChangeUserName(e) {
    this.setState({name: e.target.value})
  }

  onChangeUserEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeUserPassword(e) {
    this.setState({password: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);

    this.setState({name: '', email: '', password: ''})
  }

  render() {
    return (<div className="form-wrapper">
        <Container>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail}/>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword}/>
        </Form.Group>

        <Button variant="danger" size="md" type="submit">
          Create Student
        </Button>
      </Form>
      </Container>
    </div>);
  }
}