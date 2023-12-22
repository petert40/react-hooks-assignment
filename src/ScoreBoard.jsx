import { useRef, useState } from "react";
//Bootstrap has already been downloaded for you
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
function ScoreBoard() {
  let [players, setPlayers] = useState([
    {id:1, name: 'Jack',score:0},
    {id:2, name: 'Daniel',score:0},
    {id:3, name:'Ben',score:0}
  ])
  let playerRef = useRef();

  function addPlayer(){
    let name = playerRef.current.value || undefined;
    setPlayers([...players, {id: Date.now(), name: name}])
    playerRef.current.value = '';
  }

  function handleDelete(id){
    setPlayers(players.filter(player => player.id != id));
  }

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div class="input-group mb-3">
            {/* Modify input so that it is either connected to a ref or some kind of input state */}
            <input
              ref = {playerRef}
              type="text"
              class="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              required
            />
            {/* add Add Player event handling to this button */}
            <button
              onClick={addPlayer}
              className="btn btn-outline-primary"
              type="button"
              id="addPlayer"
            >
              Add Player
            </button>

          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-md-4">
              {/* Make sure to pass the unique id as a key */}
              <Player
                key={player.id}
                name={player.name}
                handleDelete = {() => handleDelete(player.id)}
                // Anonymous arrow function that we can hold off activating
                // until the user clicks a button inside of the Player component
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
