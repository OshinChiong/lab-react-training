import React from 'react';

const BoxColor = (props) => {
  return (
    <div
      style={{
        border: 1,
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>
        HEX #{props.r.toString(16)}
        {props.g.toString(16)}
        {props.b.toString(16)}
      </p>
    </div>
  );
};

export default BoxColor;


