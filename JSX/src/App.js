import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.jpg"

function App() {
  return (
    <>
      <div style={{border:"solid 0px black", maxWidth:"100vw"}}>
        <h1 className="title red">VOID</h1>
        <img src={imageInSrc} />
        <img src="/imageInPublic.jpg" />
      </div>
      <video controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
