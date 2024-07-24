import Navbar from './navbar'
import Story from './story'
import data from './data.jsx'
import { useEffect , useState} from 'react'

function App() {
  const story = data.map((posts) => {
    return (
      <Story
        {...posts}
      />
    )
  })
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(e => setPosts(e))
  }, [])
  return (
    <div className='flex-col'>
      < Navbar/>
      {story}
      {
        posts.map((post) => {
          return(
            <li key={post.id}>{post.title}</li> 
          )
        })
      }
    </div>
  )
}

export default App
