import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"style= {{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2 ">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2">
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "purple"}}>Purple</button>
        
          </div>
      </div>
    </div>
  )
}

export default App
