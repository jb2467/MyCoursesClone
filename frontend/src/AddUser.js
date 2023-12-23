import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import {Link } from 'react-router-dom'
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    }

  handleChange=(e)=>{
    const { name, value } = e.target;
    this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      console.log(this.state)
  }
  handleAdd =()=>{
    this.props.addUserCallback(this.state)

  }

  render(){
    return(
        <div>
            <FormGroup>
                <Label for="Email">Please enter email</Label>
                <Input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="Username">Please enter username</Label>
                <Input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="Password">Please enter password</Label>
                <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
            </FormGroup>
            <Link to="/">
              <Button onClick={this.handleAdd}></Button>
            </Link>
        </div>
    );
  }
}
export default AddUser;
