import { useState } from 'react'

export default function Checkbox() {
  const [lang, setLang] = useState([])

  const handleInput = (e) => {
    setLang([...lang, e.target.value])
  }
  
  const getForm = (e) => {
    e.preventDefault()
    console.log(lang)
  }
  return (
    <>
      <h1>Checkbox</h1>
      <form onSubmit={getForm}>
          <input type="checkbox" name="html" id="html" value="html" onChange={handleInput} /> 
        <label htmlFor="html">Html</label>
          <input type="checkbox" name="css" id="css" value="css" onChange={handleInput} />
        <label htmlFor="css">Css</label>
          <input type="checkbox" name="javascript" id="javascript" value="javascript" onChange={handleInput} />
        <label htmlFor="javascript">Javascript</label>
          <input type="checkbox" name="nodejs" id="nodejs" value="nodejs"  onChange={handleInput} />
        <label htmlFor="nodejs">Nodejs</label>
          <div>
            <button>Submit</button>
          </div>
          {lang}
      </form>
    </>
  )
}
