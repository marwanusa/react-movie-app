import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Add from './components/Add'
import Watched from './components/Watched'
import Watchlist from './components/Watchlist'
import Navigation from './components/Navigation'
import './App.css'
import  FunctionsProvider  from './components/Context/FunctionsContext'
function App() {
  return (
    <FunctionsProvider>
    <div className="App">
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Add/>} />
        <Route path='/watched' element={<Watched/>} />
        <Route path='/watchlist' element={<Watchlist/>} />
      </Routes>
    </Router>
    </div>
    </FunctionsProvider>
  )
}

export default App
