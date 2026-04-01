 import { memo } from "react"
 
 function Testmemo() {
  console.log('Testmemo component')
  return (
    <>
      <h2>Test Memo Component is A Counter Child Component</h2>
    </>
  )
}

export default memo(Testmemo)