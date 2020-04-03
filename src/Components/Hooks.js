import React, {useState, useEffect} from "react";
import NameDisplay from "./NameDisplay";

// import React, { Component } from 'react';
const Hooks = () => {
    const [count, setCount] = useState(0),
          [name, setName] = useState(""),
          [user, setUser] = useState({});

    useEffect (() => {
      /*  axios.get("request-url-here")
            .then (res => {setUser(res.data)})
            .catch(err => console.log(err)) */
        console.log("useEffect = componentDidMount")
    }, []); // without the [] dependency array. This array should contain what values you would like useEffect to 'watch'.

    useEffect (() => {
        console.log("useEffect = componentDidUpdate")
    }, [count, name]);
// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0,
//             name: ''
//         }
//     }

    // const handleAdd = () => {   HOOK EXAMPLE
    //     setCount(count + 1);
    // }

//     handleAdd(){
//     this.setState({ count: count + 1})
// }

    // const handleInput = (event) => {   HOOK EXAMPLE
    //     setName(event.target.value);
    // }

//     handleInput(value){
//      this.setState({name: e.target.value})
// }
    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)}/>
            {/* <input value={name} onChange={(event) => handleInput(event)}/> */}
            <NameDisplay name={name}/>
            {count}
            {/* <button onClick={handleAdd}>+</button> */}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
//     render(){
//         return(
//             <div>
//                 {this.state.count}
//                  <input onChange={(e) => this.handleInput(e.target.value)}/>
//             </div>
//         )
//     }
// }

export default Hooks;