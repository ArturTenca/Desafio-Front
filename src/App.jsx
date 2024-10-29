import { Outlet } from "react-router-dom"
import Side from "./routes/Side"

function App() {
  
  return (
    <>
      <Side/>
      <Outlet/>
    </>
  )
}

export default App
