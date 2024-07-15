import Navbar from './navbar'
import Story from './story'
import data from './data.jsx'

function App() {
  const story = data.map((item) => {
    return (
      <Story
        {...item}
      />
    )
  })
    
  return (
    <div className='flex-col'>
      < Navbar/>
      {story}
    </div>
  )
}

export default App
