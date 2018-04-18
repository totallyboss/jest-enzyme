import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;

    return(
        <div>
          <p>{count}</p>
          <button type="button" onClick={this.handleClick}>incrememnt</button>
        </div>
    );
  };

}

export default Counter;
