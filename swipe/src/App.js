import Card from './components/Card'
import AddCard from './components/AddCard'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {    
    const getIdeas = async () => {
      const ideasFromServer = await fetchIdeas()
      setIdeas(ideasFromServer)
    }  
    getIdeas()
  }, [])

  const fetchIdeas = async () => {
    const res = await fetch('http://localhost:5000/ideas')
    const data = await res.json()
    return data
  }

  const fetchIdea = async (id) => {
    const res = await fetch(`http://localhost:5000/ideas/${id}`)
    const data = await res.json()
    return data
  }

  const addIdea = async (idea) => {
    const res = await fetch('http://localhost:5000/ideas', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(idea)
    })
  
    const data = await res.json()
    setIdeas([...ideas, data])
  }

  const onSwipe = async (direction, id) => {
    const idea = await fetchIdea(id)
    const update = {...idea, like: direction === 'right' ? true : false} 

    const res = await fetch(`http://localhost:5000/ideas/${id}`, {
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(update)
    })

    const data = await res.json()
    setIdeas(ideas.map((idea) => idea.id === id ?
    {...idea, like: data.like}
    : idea)
    )
  }

  return (
    <Router>      
      <AddCard onAdd={addIdea}/>     
      <Card ideas={ideas} onSwipe={onSwipe}/>            
    </Router>
  );
}

export default App;
