import React, {useState} from 'react'

export default function Restmethod() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const login  = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
    console.log(gender)
  }

  return (
    <>
      <h1>Method Form</h1>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Username..."
          value={username}
          onChange={handleUsername}
        />
        <input
          type="passoword"
          name="password"
          id=""
          placeholder="Password..."
          value={password}
          onChange={handlePassword}
        />
        <select  onChange={handleGender}>
          <option value="Select Gender">Select Gander</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="submit" value="Login" />
      </form>
      <div>
        <h1>
          {username} / {password} / {gender}
        </h1>
      </div>
    </>
  );
}



//with class
// import React, { Component } from "react";

// export default class restmethod extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//       gender: "",
//     };
//   }

//   handleUsername = (e) => {
//     this.setState({
//       username: e.target.value,
//     });
//   };
//   handlePassword = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };
//   handleGender = (e) => {
//     this.setState({
//       gender: e.target.value,
//     });
//   };
//   login(e) {
//     e.preventDefault();
//     console.log(this.state.username);
//     console.log(this.state.password);
//     console.log(this.state.gender);
//   }
//   render() {
//     return (
//       <>
//         <h1>Method Form</h1>
//         <form onSubmit={(e) => this.login(e)}>
//           <input
//             type="text"
//             name="username"
//             id=""
//             placeholder="Username..."
//             value={this.state.username}
//             onChange={this.handleUsername}
//           />
//           <input
//             type="passoword"
//             name="password"
//             id=""
//             placeholder="Password..."
//             value={this.state.password}
//             onChange={this.handlePassword}
//           />
//           <select name="" id="" value={this.state.gender} onChange={this.handleGender}>
//             <option value="Select Gender">Select Gander</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input type="submit" value="Login" />
//         </form>
//         <div>
//           <h1>
//             {this.state.username} / {this.state.password} / {this.state.gender}
//           </h1>
//         </div>
//       </>
//     );
//   }
// }
