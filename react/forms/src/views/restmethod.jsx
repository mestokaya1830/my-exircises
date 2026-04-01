import React, {useState} from 'react'

export default function Method() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    gender: ''
  })

  const handleInput = (e) => {
    setUser(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  const login  = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <>
      <h1>Rest Method Form</h1>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Username..."
          value={user.username}
          onChange={handleInput}
        />
        <input
          type="passoword"
          name="password"
          id=""
          placeholder="Password..."
          value={user.password}
          onChange={handleInput}
        />
        <select name="gender" id="" onChange={handleInput}>
          <option value="Select Gender">Select Gander</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="submit" value="Login" />
      </form>
      <div>
        <h1>
          {user.username} / {user.password} / {user.gender}
        </h1>
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
//       user: {
//         username: "",
//         password: "",
//         gender: "",
//       },
//     };
//   }

//   handleInput = (e) => {
//     this.setState((prevState) => ({
//       user: {...prevState.user, [e.target.name] : e.target.value},
//     }));
//   };

//   login(e) {
//     e.preventDefault();
//     console.log(this.state.user);
//   }
//   render() {
//     return (
//       <>
//         <h1>Rest Method Form</h1>
//         <form onSubmit={(e) => this.login(e)}>
//           <input
//             type="text"
//             name="username"
//             id=""
//             placeholder="Username..."
//             // value={this.state.user.username}
//             onChange={this.handleInput}
//           />
//           <input
//             type="passoword"
//             name="password"
//             id=""
//             placeholder="Password..."
//             // value={this.state.user.password}
//             onChange={this.handleInput}
//           />
//           <select
//             name="gender"
//             id=""
//             // value={this.state.user.gender}
//             onChange={this.handleInput}
//           >
//             <option value="Select Gender">Select Gander</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input type="submit" value="Login" />
//         </form>
//         <div>
//           <h1>
//             {/* {this.state.user.username} / {this.state.user.password} / {this.state.user.gender} */}
//           </h1>
//         </div>
//       </>
//     );
//   }
// }
