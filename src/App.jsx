/* eslint-disable no-unused-vars */
import { useState } from "react"



function App() {

  const [color, setcolor] = useState("black")


  return (

      <div className= "w-full h-screen text-white flex justify-center" style={{backgroundColor:color}} >

        <div className="text-9xl bg-green-600 h-32 relative top-36 p-0.5 rounded-md text-wrap">Ashu</div>


        <div className="flex flex-wrap text-black bottom-5 justify-evenly fixed w-3/4 rounded-md px-4 py-4 bg-white gap-4 shadow-md">

        <button onClick={()=>setcolor("red")} className=" bg-red-800 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover:bg-red-900 ">red</button>


        <button onClick={()=>setcolor("green")} className=" bg-green-800 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover:bg-green-900 ">green</button>


        <button onClick={()=>setcolor("blue")} className=" bg-blue-700 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover:bg-blue-800 ">blue</button>



        <button onClick={()=>setcolor("olive")} className=" bg-amber-600 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover:bg-amber-700">olive</button>

        <button onClick={()=>setcolor("grey")} className=" bg-gray-500 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover:bg-gray-600">gray</button>




        <button onClick={()=>setcolor("yellow")} className=" bg-yellow-400 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover: bg-yellow-500  ">yellow</button>


        

        <button onClick={()=>setcolor("pink")} className=" bg-pink-500 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover: bg-pink-600  ">pink</button>


        <button onClick={()=>setcolor("purple")} className=" bg-purple-600 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover:bg-purple-700  ">purple</button>


        <button onClick={()=>setcolor("lavender")} className="text-white bg-stone-800 rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover:bg-stone-900 ">stone</button>


        <button onClick={()=>setcolor("white")} className="shadow-[0px_0px_10px_rgba(0,0,20,30)] bg-white rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover: bg-slate-300">white</button>


        <button onClick={()=>setcolor("black")} className="text-white bg-black rounded-full px-3 py-1 shadow-[0px_0px_10px_rgba(0,0,20,30)] hover:scale-95 hover: hover ">black</button>




        


        


        </div>

      </div>
    
  )
}

export default App
