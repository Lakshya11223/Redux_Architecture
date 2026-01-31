
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increament,decreament } from './redux/Slices/counter'
import Mycomp from './Component'
import { useAppDispatch, useAppSelector } from './redux/hooks'
function App() {
 
  const count = useAppSelector(store => store.counter)
  const dispatch = useAppDispatch()
  return (
  
    <>
      <div>
        <a href="https://vite.dev" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Count is {count}</h1>
        <button type='button' onClick={()=> dispatch(increament())}>Increament</button>
        <button type='button' onClick={()=>dispatch(decreament())}>decreament</button>
      </div>
<hr></hr>
      <Mycomp/>
      
    </>
  )
}

export default App
