import React from 'react';
import { ChevronUp, ChevronsUp, ChevronDown, ChevronsDown, RotateCcw, Hash } from 'react-feather'

let count;
let setCount;

function init(){
  const countArray = React.useState(0);
  count = countArray[0];
  setCount = countArray[1];
  console.log("init() called");
};


//init();

function update(count, setCount){
  const _count = count + 1;
  setCount(count++);
  console.log('update:'+_count);
}

function Counter() {
 
init();

  // update(count, setCount)

  console.log('Count():'+count);  
  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">
          {count}
        </span>
      </p>
      <div className="button-row">
        <button onClick={() => setCount(count + 1)}>
          <ChevronUp />
          <span className="visually-hidden">
            Increase slightly
          </span>
        </button>
        <button>
          <ChevronsUp />
          <span className="visually-hidden">
            Increase a lot
          </span>
        </button>
        <button>
          <RotateCcw />
          <span className="visually-hidden">
            Reset
          </span>
        </button>
        <button>
          <Hash />
          <span className="visually-hidden">
            Set to random value
          </span>
        </button>
        <button>
          <ChevronsDown />
          <span className="visually-hidden">
            Decrease a lot
          </span>
        </button>
        <button>
          <ChevronDown />
          <span className="visually-hidden">
            Decrease slightly
          </span>
        </button>
      </div>
    </div>
  );
}

export default Counter;