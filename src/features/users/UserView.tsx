import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
  const users=useSelector((state)=>state.users)
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(fetchUsers())
  },[])
  console.log(users,"usres")
  return (
    <div>
        <h2>Uers List</h2>
        {users.loading && (<div>Loading ...</div>)}
        {!users.loading&&users.err? (<div>Error: {users.err}</div>):null}
          {!users.loading&&users.users.length>0?users.users.map((user,index)=>
            <div key={index}>
              {user.name}   
            </div>
          ):null}
    </div>
  )
}
