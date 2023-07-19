import './App.css'
import MainLaylout from './layout/MainLaylout'
import { useAppDispatch } from './redux/hooks'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './lib/firebase'
import { setUser } from './redux/features/userSlice'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const dispatch = useAppDispatch()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email))
    }
  })

  return (
    <>
      <MainLaylout />
      <ToastContainer />
    </>
  )
}

export default App
