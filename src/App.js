import { Stage, Layer, Circle } from "react-konva";
import Konva from "konva";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  const [noc, setNoC] = useState(9);

  const [arr, setArr] = useState([]);

  const RADIUS = 200;
  useEffect(() => {
    setArr(Array.from({ length: noc }, (_, index) => index + 1));
  }, [noc]);

  var dAlpha = (Math.PI * 2) / arr.length;
  return (
    <div className="App ">
      <div className="input-circle">
        <label>Number of circles: {noc}</label>
        <input
          type="range"
          min={1}
          max={12}
          defaultValue={10}
          onChange={(e) => {
            setNoC(e.target.value);
          }}
        />
      </div>

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {arr.map((item, i) => {
            var alpha = dAlpha * i;
            var dx = Math.cos(alpha) * RADIUS;
            var dy = Math.sin(alpha) * RADIUS;
            return (
              <Circle
                key={i}
                x={centerX + dx}
                y={centerY + dy}
                width={RADIUS / 2}
                height={RADIUS / 2}
                fill={Konva.Util.getRandomColor()}
                draggable
                onDragStart={(e) => {
                  const stage = e.target.getStage();
                  console.table({
                    offsetX: stage.attrs.x,
                    offsetY: stage.attrs.y,
                  });
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
