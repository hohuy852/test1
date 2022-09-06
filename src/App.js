import { Stage, Layer, Text, Circle } from "react-konva";
import Konva from 'konva';
import "./App.css";

function App() {
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  const QUANTITY = [1, 2, 3, 4, 5, 6, 7, 8];
  const RADIUS = 200;

  var dAlpha = (Math.PI * 2) / QUANTITY.length;
  return (
    <div className="App ">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {QUANTITY.map((item, i) => {
            var alpha = dAlpha * i;
            var dx = Math.cos(alpha) * RADIUS;
            console.log("dx:",dx)
            var dy = Math.sin(alpha) * RADIUS;
            return (
              <Circle
                key={i}
                x={centerX + dx}
                y={centerY + dy}
                width={100}
                height={100}
                fill={Konva.Util.getRandomColor()}
                draggable
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
