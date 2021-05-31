import React,{useEffect} from "react";
import Axios from "axios"


function App() {

  useEffect(()=>{
    checkLogin();
    },[])
    

  const checkLogin = async () => {
      await Axios.get("/exercise")
      .then(function(res){
        console.log(res);
      })
  }
  


  return (
    <div className="container">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
