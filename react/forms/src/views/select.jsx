import React, { useState } from "react";

export default function Select() {
  const [gender, setGender] = useState("Male");
  const [lang, setLang] = useState([]);

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleLang = (e) => {
    setLang(Array.from(e.target.selectedOptions).map(item => item.value));
  };
  const getGender = (e) => {
    e.preventDefault();
    console.log(gender);
  };
  const getLang = (e) => {
    e.preventDefault();
    console.log(lang);
  };
  return (
    <>
      <h1>Select</h1>
      <h2>Select Gender</h2>
      <form onSubmit={getGender}>
        <select onChange={handleGender}>
          <option value="Select Gender" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div>
          <button onChange={getGender}>Get Gender</button>
        </div>
      </form>

      <form onSubmit={getLang} style={{ marginTop: "30px" }}>
        <select onChange={handleLang} multiple>
          <option value="Select Lang" disabled>Select Lang</option>
          <option value="html">Html</option>
          <option value="css">Css</option>
          <option value="javascript">Javascript</option>
        </select>
        <div>
          <button onChange={getLang}>Get Lang</button>
        </div>
      </form>
    </>
  );
}
