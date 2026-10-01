import React, { useState } from 'react'

function Hooks() {
  const [text, setText] = useState("")


  return (
    <>
    <div className="container p-5">
      <div className="content card p-3">
      <h2><b><u>WORD-COUNTER : </u></b></h2>
      <textarea placeholder='Enter Tect Here ' value={text} onChange={(e)=>setText(e.target.value)} className='form-control' row='8'cols='20'>

      </textarea>
      <div className="btn">
        <div className="btn btn-info m-2">uppercase</div>
         <div className="btn btn-info m-2">lowcase</div>
          <div className="btn btn-info m-2">copytect</div>
           <div className="btn btn-info m-2">cleartext</div>

      </div>
      <br />
      <h2><b><u>PREVIEW : </u></b></h2>
      <p><i>{text}</i></p>
      </div>
    </div>
    </>
  )
}

export default Hooks