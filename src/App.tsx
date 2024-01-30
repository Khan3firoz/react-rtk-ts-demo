import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IceCreameView } from './features/iceCreame/IceCreameView'
import { UserView } from './features/users/UserView'

function App() {

  return (
    <>
      <div>
        <CakeView/>
        <IceCreameView/>
        <UserView/>
      </div>
    </>
  )
}

export default App
