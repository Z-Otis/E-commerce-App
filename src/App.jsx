import './App.css'
import Meals from './components/Meals'
import Search from './components/Search'
import Favorites from './components/Favorites'
import Modal from './components/Modal'
import { useGlobalContext } from './context'


function App() {
 const {showModal, favorites} = useGlobalContext();

  return (
    <div>
       <Search />
      {favorites.length > 0 && <Favorites />}
        <Meals />
      {showModal && <Modal />}
      </div>
  )
}

export default App
