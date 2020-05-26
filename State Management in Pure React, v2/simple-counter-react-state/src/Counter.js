import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
  }

  handleClick(type) {
    const { max, step } = this.props;

    switch (type) {
      case 'increment':
        this.setState(
          (state) => {
            if (state.count >= max) return;
            return { count: state.count + step };
          },
          () => this.updateDocumentTitle(),
        );
        break;
      case 'decrement':
        this.setState(
          (state) => {
            return { count: state.count - step };
          },
          () => this.updateDocumentTitle(),
        );
        break;
      case 'reset':
        this.setState(
          () => {
            return { count: 0 };
          },
          () => this.updateDocumentTitle(),
        );
        break;
      default:
        break;
    }
  }

  updateDocumentTitle() {
    document.title = `Count: ${this.state.count}`;
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={() => this.handleClick('increment')}>
            Increment
          </button>
          <button onClick={() => this.handleClick('decrement')}>
            Decrement
          </button>
          <button onClick={() => this.handleClick('reset')}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
