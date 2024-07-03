// const App = () => {
//    const friends = [
//       { name: "Peter", age: 4 },
//       { name: "Maya", age: 10 },
//    ];

//    return (
//       <div>
//          {/* In React, the individual things rendered in braces must be primitive values, such as numbers or strings. */}
//          <p>
//             {friends[0].name} {friends[0].age}
//          </p>
//          <p>
//             {" "}
//             {friends[0].name}
//             {friends[1].age}
//          </p>
//       </div>
//    );
// };
const App = () => {
   const friends = ["Peter", "Maya"];

   return (
      <div>
         <p>{friends}</p>
      </div>
   );
};

export default App;
