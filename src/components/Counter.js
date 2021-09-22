import React, { Component } from "react";

const Counter = ({ onIncrement, onDelete, onDecrement, counter }) => {

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += counter.value === 0 ? "warning" : "primary";
        return classes;
      };
    
      const formatCount = () => {

        return counter.value === 0 ? "Zero" :  counter.value;
      };

    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span style={{ fontSize: 24 }} className={getBadgeClasses()}>
              {formatCount()}
            </span>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-secondary"
              onClick={() => onIncrement(counter)}
            >
                +
              {/* <i className="fa fa-plus-circle" aria-hidden="true" /> */}
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => onDecrement(counter)}
              disabled={counter.value === 0 ? "disabled" : ""}
            >
                -
              {/* <i className="fa fa-minus-circle" aria-hidden="true" /> */}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(counter.id)}
            >
                X
              {/* <i className="fa fa-trash-o" aria-hidden="true" /> */}
            </button>
          </div>
        </div>
      </div>
    );
  

 
}

export default Counter;
