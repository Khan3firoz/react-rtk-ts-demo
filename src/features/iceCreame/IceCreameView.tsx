import { ordered, restocked } from './iceCreameSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const IceCreameView = () => {
  const numberOfIceCream=useAppSelector((state)=>state.iceCream.numberOfIceCream)
  const dispatch=useAppDispatch()

  return (
    <div>
        <h2>Number of IceCreames - {numberOfIceCream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order IceCreame</button>
        <button onClick={()=>dispatch(restocked(5))}>Restocked IceCreame</button>
    </div>
  )
}
