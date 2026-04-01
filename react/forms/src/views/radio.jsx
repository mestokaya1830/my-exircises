import React, { useState } from 'react'

export default function Radio() {
  const [lang, setLang] = useState()

  const handleInput = (e) => {
    setLang(e.target.value)
  }
  
  const getForm = (e) => {
    e.preventDefault()
    console.log(lang)
  }
  return (
    <>
      <h1>Radio</h1>
      <form onSubmit={getForm}>
          <input type="radio" name="lang" id="html" value="html" onChange={handleInput} /> 
        <label htmlFor="html">Html</label>
          <input type="radio" name="lang" id="css" value="css" onChange={handleInput} />
        <label htmlFor="css">Css</label>
          <input type="radio" name="lang" id="javascript" value="javascript" onChange={handleInput} />
        <label htmlFor="javascript">Javascript</label>
          <input type="radio" name="lang" id="nodejs" value="nodejs"  onChange={handleInput} />
        <label htmlFor="nodejs">Nodejs</label>
          <div>
            <button>Submit</button>
          </div>
          {lang}
      </form>
    </>
  )
}
