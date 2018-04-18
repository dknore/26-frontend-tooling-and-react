class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return {count: state.count + 1};
    });
  }

  render() {
    return <p onClick={this.handleClick}>
    Clicked {this.state.count} times.
    </p>
  }
};

module.exports = ClickCounter