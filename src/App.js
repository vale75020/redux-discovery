import React, { Component } from "react";
import { connect } from "react-redux";
import { changeName } from './redux/actions';

class App extends Component {
  state = {
    inputValue: "salut"
  };

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <span>Bonjour: {this.props.user}</span>
        <input onChange={this.onChange} />
        <button onClick={() => this.props.changeName(this.state.inputValue)}>Change my name</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // lier elements du store à props notre component
  return {
    user: state.user
  };
};

const mapActionsToProps = {
// lier action au component
changeName
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
