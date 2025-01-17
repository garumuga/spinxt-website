import spinXTLogo from "./assets/spinXTLogo.jpg";
import "./App.css";
import BackgroundImage from "./assets/Background.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mainDiv">
        <img src={spinXTLogo} className="logo react" alt="React logo"></img>
        <h4 style={{color:"teal", marginTop:"50px"}}>Welcome to SpinXT world of Textile Products!!!</h4>
      
        </div>   
        <div style={{width:"100%", minHeight:"200px", backgroundImage:`url(${BackgroundImage})` , backgroundRepeat: 'no-repeat', backgroundSize:"cover", opacity:0.9 }}>
        <img src={BackgroundImage}  alt="React logo"></img></div> 
      </header>
      <div className="mainDiv"></div>
      <div style={{ position: "fixed",
  bottom: 0,
  width: "100%",
backgroundColor:"teal",
  minHeight: "30px"}}>
      </div>
    </div>
  );
}

export default App;
