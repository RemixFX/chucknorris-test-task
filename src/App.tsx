import './App.css'
import Card from './components/Card/card'
import Search from './components/Search/search'

function App() {
  return (
    <div className='page'>
      <Search/>
      <main className='grid'>
      <Card/>
      </main>
    </div>
  )
}

export default App
