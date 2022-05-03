import React from 'react';
import visa from '../assets/images/visa.png';
import mc from '../assets/images/master-card.svg';

const CreditCard = (props) => {
  let digits = props.number.split('').splice(12, 4).join('');
  let lastFour = props.number.substring(props.number.length - 4);
  let sliced = props.number.slice(-4);
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <img src={props.type === 'Visa' ? visa : mc} height="50" width="75" />
      <p>•••• •••• •••• {digits}</p>
      <p>•••• •••• •••• {lastFour}</p>
      <p>•••• •••• •••• {sliced}</p>
      <p>
        expires
        {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};
export default CreditCard;