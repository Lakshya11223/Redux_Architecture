import {  useAppSelector } from "../redux/hooks"

const Mycomp:React.FC = () =>{
    const count = useAppSelector(s => s.counter)

  return (
    <div>
        <h1>Dusri Duniya Me count = {count}</h1>
        
    </div>
  )
}

export default Mycomp