import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
  };

  makeIncrementer = amount => () => {
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));
  };

  increment = this.makeIncrementer(1);

  decrement = this.makeIncrementer(-1);


  render() {
    const { count } = this.state;

    return(
        <div>
          <p>{count}</p>
          <button className="increment" name="increment" type="button" onClick={this.increment}>+++</button>
          <button className="decrement" name="decrement" type="button" onClick={this.decrement}>---</button>
        </div>
    );
  };

}

export default Counter;
