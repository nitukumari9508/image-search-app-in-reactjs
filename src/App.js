import React, { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {
   const[image,setimage]=useState("")
   const[result,setResult]= useState([])
    const onChange=(event)=>{
    var newResult= event.target.value
    setimage(newResult)
   }
   const changephoto=()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=L3sVAhXec88drVp_pVrJbqQbCCsO68zYcrRLxgtQKww`)
    .then((res)=>{
setResult(res.data.results)
})
   }

  return (
    <>
    <div className="App">
      <h1>Photo-Search-App</h1>
      <input type="text" value={image} placeholder='type something' style={{ margin: "20px" }}  onChange={onChange}/>
      <button  type="submit" onClick={changephoto} className="btn btn-primary" >get image</button>
    </div>
    <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
    </>
  );
};
export default App;
//L3sVAhXec88drVp_pVrJbqQbCCsO68zYcrRLxgtQKww