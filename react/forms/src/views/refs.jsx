import React, { useEffect } from 'react'

export default function Refs() {
  const inputRef = React.createRef()
  useEffect(() => {
    inputRef.current.focus()
  })

  const getValue = () => {
    console.log(inputRef.current.value)
  }
  return (
    <>
      <h1>Refs</h1>
        <input type="text" ref={inputRef} className='form-control' />
        <button onClick={getValue}>Get input value bei Ref</button>
    </>
  )
}


//with class
// import React, { Component } from 'react'

// export default class refs extends Component {
//   constructor(props) {
//     super(props)
  
//     this.inputRef = React.createRef()
//   }
  

//   componentDidMount(){
//     this.inputRef.current.focus()
//   }
//   getValue = () => {
//     console.log(this.inputRef.current.value)
//   }
//   render() {
//     return (
//       <>
//       <h1>Refs</h1>
//         <input type="text" ref={this.inputRef} className='form-control' />
//         <button onClick={this.getValue}>Get input value bei Ref</button>
//       </>
//     )
//   }
// }
