import React from 'react'
import { ordered, restocked } from './cakeSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const CakeView = () => {
  const numberOfCake=useAppSelector((state)=>state.cake.numberOfCake)
  const dispatch=useAppDispatch()

  return (
    <div>
        <h2>Number of cake - {numberOfCake}</h2>
        <button onClick={()=>dispatch(ordered())}>Order cake</button>
        <button onClick={()=>dispatch(restocked(5))}>Restocked cake</button>
    </div>
  )
}
