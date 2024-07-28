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
  useEffect( () => {
    const fetchData  = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      console.log(data)
      setPosts(data)
} 
    fetchData()
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
