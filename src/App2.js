import React from "react" 
import './App2.css';

function App() {
  const [rotate, setRotate] = React.useState(0)
  const imgRef = React.createRef()

  const onTurnToLeft = () => {
    console.log('---',imgRef.current) 
    if (rotate != -360) {
      setRotate(rotate - 90)
    } else {
       setRotate(-90)
    } 
  }
  
  const onTurnToRight = () => {
    if (rotate != 360) {
      setRotate(rotate + 90)
    } else {
       setRotate(90)
    }
  }

  React.useEffect(() => {
    imgRef.current.style.transform = `rotate(${rotate}deg)`
  }, [rotate])

  return (
    <div className="App">
      <div><button onClick={onTurnToLeft}>to left</button><button onClick={onTurnToRight}>to right</button></div>
      <img ref={imgRef} src="https://aipa.ru/189871-thickbox_default/sejlor-mun-sailor-moon-anime-raskraska-kartina-po-nomeram-na-kholste.jpg" />
    
    </div>
  );
}

export default App;
