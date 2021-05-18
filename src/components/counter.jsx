import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          {" "}
          {/* {this.props.children} */}
          <span
            // style={{ fontSize: 15 }}
            className={
              this.props.counter.value === 0
                ? "badge badge-warning"
                : "badge badge-primary"
            }
          >
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value: c } = this.props.counter;
    return c === 0 ? "Zero" : c;
  }
}

export default Counter;
