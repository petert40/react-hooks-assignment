import React from "react";
import { useState } from "react";

function Player({name, handleDelete}) {
  let [score, setScore] = useState(0)
  
  name = name || "new player";

  function addPoint(){
    setScore(() => score + 1)
  }

  function subtractPoint(){
    if(score >= 1){
      setScore(() => score - 1);
    }
  }

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {/* Render Name here */}
        <h2 className="text-center">{name}</h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Add increment event handler */}
          <button onClick={addPoint} className="btn btn-outline-primary w-100">Add Point +</button>
        </div>
        <div className="col-md-6">
          {/* Add decrement event handler */}
          <button onClick={subtractPoint} className="btn btn-outline-danger w-100">
            Remove Point -
          </button>
        </div>
        <div className="row">
        <button
              onClick={handleDelete}
              class="btn btn-danger col-md-4 m-2"
              type="button"
              id="deletePlayer"
            >
              Delete 
            </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
