// import React from "react";
// import colorsJson from "../colors.json";

// const Colors = () => {
//   const [colorArr, setColorArr] = React.useState(colorsJson);
//   const [color, setColor] = React.useState("red");

//   function addColorToArray() {
//     if (color && !colorArr.includes(color)) {
//       let newColor = {
//         color: color,
//         id: String(Math.floor(Math.random() * 1000000000)),
//       };

//       setColorArr(colorArr.concat(newColor));
//       setColor("");
//     }
//   }

//   function removeColorFromArray(colorToRemove) {
//     let filteredArr = colorArr.filter(function (singleColor) {
//       return colorToRemove !== singleColor;
//     });
//     setColorArr(filteredArr);
//   }

//   return (
//     <div>
//       <h1>Create Colors</h1>

//       <label>New Color</label>
//       <input
//         type="text"
//         name="color"
//         onChange={(e) => setColor(e.target.value)}
//         value={color}
//       />
//       <button onClick={addColorToArray}>Add Color</button>

//       <h3>Our colors</h3>
//       <ul>
//         {colorArr.map(function (individualColor) {
//           return (
//             <div
//               style={{ display: "flex", flexDirection: "row" }}
//               key={individualColor.id}
//             >
//               <li style={{ color: individualColor.color }}>
//                 {individualColor.color}
//               </li>
//               <button onClick={() => removeColorFromArray(individualColor)}>
//                 Remove
//               </button>
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Colors;