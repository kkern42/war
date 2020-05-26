import React, { Component } from "react";

// function CompareCards(props) {
//     if (props.user[props.getScore[0]].value > props.machine[props.getScore[0]].value) {
//         props.setScore([props.getScore[0], props.getScore[1] + 1, props.getScore[2]]);
//     }
//     else {
//         props.setScore([props.getScore[0], props.getScore[1], props.getScore[2] + 1]);
//     }

//     return (
//         <div>
//             <div>
//                 players score {props.user[props.getScore[1]]}
//             </div>
//             <div>
//                 machine score {props.machine[props.getScore[2]]}
//             </div>
//         </div>
//     );
// }

function Display(props) {
    const [getCards, setCards] = React.useState([0, 0, 0]);

    const increment = () => {

        if (props.user[getCards[0]].value > props.machine[getCards[0]].value) {
            setCards([getCards[0] + 1, getCards[1] + 1, getCards[2]]);

        }
        else {
            setCards([getCards[0] + 1, getCards[1], getCards[2] + 1]);
        }

    }
    return (
        <div>
            <div style={{ marginLeft: "50vw", marginTop: "20vw" }}>
                <div>Your card {props.user[getCards[0]].value} of {props.user[getCards[0]].suit} </div>
                <div>Machines card {props.machine[getCards[0]].value} of {props.machine[getCards[0]].suit}</div>
                {/* <CompareCards user={props.user} machine={props.machine} getScore={getCards} setScore={setCards} /> */}
            </div>
            <button style={{ marginLeft: "50vw", marginTop: "2vw" }} onClick={increment}>Draw</button>
            <div style={{ marginLeft: "50vw", marginTop: "2vw" }}>
                Your score: {getCards[1]}
            </div>
            <div style={{ marginLeft: "50vw", marginTop: "2vw" }}>
                Machine score: {getCards[2]}
            </div>

        </div>
    );
}


export default Display;