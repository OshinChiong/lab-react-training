import React from 'react';

function Rating (props){

    let wholeNum = Math.round(props.children);

    let fullStar = '★';
    let emptyStar = '☆';
    let stars = fullStar.repeat(wholeNum);
    stars = emptyStar.repeat(5- wholeNum);

    return <p> (stars) </p>

}



export default Rating;