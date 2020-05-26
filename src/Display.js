import React, { Component } from "react";

function Display(props) {
    const [getCards, setCards] = React.useState([0, 0, 0]);

    const increment = () => {
        setCards([getCards[0] + 1, getCards[1], getCards[2]]);
    }
    console.log(props.user)
    return (
        <div>
            <div>
                Your card {props.user[getCards[0]].value} of {props.user[getCards[0]].suit}           Machines Card {props.machine[getCards[0]].value} of {props.machine[getCards[0]].suit}
            </div>
            <button onClick={increment}>Draw</button>
        </div>
    );
}


export default Display;