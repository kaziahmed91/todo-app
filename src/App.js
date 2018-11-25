import React, { Component } from "react";
import "./App.css";
import CreateForm from "./containers/CreateForm";
import ListItems from "./containers/ListItems";
import { Form, Segment, Button } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTodo: false,
      password: '', 
      incorrectPassword: false
    };
  }

  handleSubmit = () => {
    console.log(this.state)
    return this.state.password === "NOW!" ? this.setState({displayTodo: true}) : this.setState({incorrectPassword: true});
  }

  onTextChange = (e) => {
    this.setState({incorrectPassword: false})
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "80px" }}>
        { !this.state.displayTodo ? (
          <Segment raised>
            <p>When do you want it? (hint: NOW!)</p>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Answer"
              onChange={this.onTextChange}
            />
            <br />
            <Button color="teal" fluid size="medium" onClick={this.handleSubmit}>
              Login{" "}
            </Button>
            { this.state.incorrectPassword ? 
              (<p style={{color: 'red'}}>Incorrect Password! Please try again</p> ) : ""
            }
          </Segment>
        ) : (
          <div className="row">
            <CreateForm />
            <ListItems />
          </div>
        )}
      </div>
    );
  }
}

export default App;
