import React from 'react';

const IdCard = (props) => {
  return (
    <div className="id-card">
      <img src={props.picture} alt="person" />
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toString()}</p>
      </div>
    </div>
  );
};

export default IdCard;

