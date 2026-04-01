import  {useState} from 'react'
import Testmemo from '../components/testmemo'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  const increament = () => {
    setCount(count + 1)
  }
  const decreament = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h1 className='counter'>{count}</h1>
      <div>
        <button onClick={() => increament()}>Increament</button>
        <button onClick={() => decreament()}>Decreament</button>
      </div>

      <Testmemo />
      <p>
        Test Component is not updated when Counter is updated because we used memo
        <br/>
        Look at the console
      </p>
    </>
  )
}








//class component

// import React, { Component } from 'react'

// export default class counter extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count: 0
//     }
//   }
//   increament(){
//     this.setState({count: this.state.count + 1})
//   }
//   decreament(){
//     this.setState({count: this.state.count - 1})
//   }
 
//   render() {
//     return (
//       <>
//         <h1>Counter</h1>
//         <h1 className='counter'>{this.state.count}</h1>
//         <div>
//           <button onClick={() => this.increament()}>Increament</button>
//           <button onClick={() => this.decreament()}>Decreament</button>
//         </div>
//       </>
//     )
//   }
// }
