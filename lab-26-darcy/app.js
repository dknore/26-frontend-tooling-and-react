import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import { think, say, DEFAULT, REN, STIMPY, BEAVIS } from 'cowsay';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cowsay Lorem Ipsum",
      content: think({text: faker.hacker.phrase()})
    }
    this.saySomething = this.saySomething.bind(this);
  }

  saySomething() {
    this.setState({
      content: say({
        text: faker.lorem.word()
      })
    })
  }

  render() {
    return <div>
      <h1>{this.state.name}</h1>
      {<select>
        <option value="default">Default</option>
        <option value="ren">Ren</option>
        <option value="stimpy">Stimpy</option>
        <option value="beavis">Beavis</option>
      </select>}
      
      {<button onClick={this.saySomething}>Select</button>}
      
      <pre>{this.state.content}</pre>
      
      <ClickCounter></ClickCounter>
    </div>;
  }
}

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(state => {
      return {count: state.count + 1};
    });
  }

  render() {
    return <div onClick={this.increment}>
      This has been clicked {this.state.count} times
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);