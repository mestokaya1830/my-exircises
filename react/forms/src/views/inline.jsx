import {useState} from 'react'

export default function Inline() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  
 
  const login  = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
    console.log(gender)
  }
  return (
    <>
    <h1>Inline Form</h1>
      <form onSubmit={(e) => login(e)}>
        <input type="text" name="username" id="" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="passoword" name="password" id="" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Select Gender">Select Gander</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="submit" value="Login" />
      </form>
      <div>
        <h1>{username} / {password} / {gender}</h1>
      </div>
    </>
  );
}


//with class

// import React, { Component } from "react";

// export default class inline extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//       gender: ""
//     };
//   }

//   login(e) {
//     e.preventDefault()
//     console.log(this.state.username)
//     console.log(this.state.password)
//     console.log(this.state.gender)
//   }
//   render() {
//     return (
//       <>
//       <h1>Inline Form</h1>
//         <form onSubmit={(e) => this.login(e)}>
//           <input type="text" name="username" id="" placeholder="Username..." value={this.username} onChange={(e) => this.setState({username: e.target.value})} />
//           <input type="passoword" name="password" id="" placeholder="Password..." value={this.password} onChange={(e) => this.setState({password: e.target.value})} />
//           <select name="" id="" value={this.gender} onChange={(e) => this.setState({gender: e.target.value})}>
//             <option value="Select Gender">Select Gander</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input type="submit" value="Login" />
//         </form>
//         <div>
//           <h1>{this.state.username} / {this.state.password} / {this.state.gender}</h1>
//         </div>
//       </>
//     );
//   }
// }
