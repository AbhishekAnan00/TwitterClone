import './App.css'
import Login from './Pages/Login'
import Page from './Pages/Page'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
function App() {

  return (
    <>
    <Router>
      <Page/>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
