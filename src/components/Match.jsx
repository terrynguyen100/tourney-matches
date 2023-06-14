import React from "react"; //optional

function Match(props) {
  return (
    <article className="Match">
      <h1>{props.players[0]} <span>vs</span> {props.players[1]}</h1>
      {/*using short-circuit evaluation to implement conditional rendering  */}
      {props.winner && <h2>{props.winner} is the winner by {props.scoreDifference}!</h2>}
      {!props.winner && <h2>No winners yet!</h2>}

      {/*using ternary operator to implement conditional rendering  */}
      {/* props.winner ? <h2>{props.winner} is the winner by {props.scoreDifference}!</h2> : <h2>No winners yet!</h2> */}
    </article>
  );
}
export default Match;