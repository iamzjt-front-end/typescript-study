// hooks: useState
// const [counter, setCounter] = useState(10);

function useState<T>(state: T) {
  let currentState = state;
  const changeState = (newState: any) => {
    currentState = newState;
  }

  const tuple: [T, (newState : T) => void] = [currentState, changeState];
  return tuple;
}

const [num, setNum] = useState(10);
const [str, setStr] = useState('abc');
const [flag, setFlag] = useState(true);

console.log(num);
setNum(100);

console.log(str);
setStr('100');

console.log(flag);
setFlag(false);

export {}
