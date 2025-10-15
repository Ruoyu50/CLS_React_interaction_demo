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





// import { useState } from 'react';
// export default function ToggleImage() {
//   const [visible, setVisible] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? 'Hide' : 'Show'}
//       </button>
//       {visible && (
//         <div>
//           <p>This is a sample image:</p>
//           <img src="https://picsum.photos/id/237/200/300"
//           alt="React Logo"
//           style={{ width: '200px', marginTop: '20px' }} />
//         </div>
//       )}
//     </div>
//   );
// }




import { useState } from 'react';

export default function Gallery() {
  const [images] = useState([
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
  ])

// return(
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       {images.map((url, index) =>(
//         <img key={index}
//           src={url}
//           alt={`photo ${index}`}
//           style={{ width: '200px', margin: '10px' }}
//         />)
//       )}
//       </div>
// )

// function myFunction (url,index){
  
// }

const toggleSelect = (url) => {
  const images = {
    const currentSelected = [...selected];

    if (currentSelected.includes(url)){
      const index  = currentSelect.index0f(url);
      currentSelected.splice(index, 1)
    } else {
      custoSelected.push(url);
    }
    setSelected(currentSelected);
  }


  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {images.map((url, index) =>(
        <img key={index}
          src={url}
          alt={`photo ${index}`}
          onClick={() => toggleSelect(url)}
          style={{
            border: selected.includes(url) ? '5px solid blue' : 'none' 
          }}
        />)
      )}
      </div>
    )
  }