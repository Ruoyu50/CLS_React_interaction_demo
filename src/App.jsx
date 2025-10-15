// function Greeting(props) {
//   return (
//     <h2>Hello, {props.name}!</h2>
//   )
// }
// export default function App() {
//   return(
//     <div>
//       <Greeting name="Alice" />
//       <Greeting name="Bob" />
//     </div>
//   );
// }




// import { useState } from 'react';
// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }





import { useState } from 'react';
export default function ToggleImage() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <div>
          <p>This is a sample image:</p>
          <img src="https://picsum.photos/id/237/200/300"
          alt="React Logo"
          style={{ width: '200px', marginTop: '20px' }} />
        </div>
      )}
    </div>
  );
}