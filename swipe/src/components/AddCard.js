import {useState} from 'react'
import './AddCard.css'

const AddCard = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text || !title){
            alert('Please add an idea')
            return
        }

        onAdd({title, text})        
        setTitle('')
        setText('')
    }

    return (
        <form className='add-form container' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Add Tittle' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Idea</label>
                <textarea type='text' placeholder='Add Idea' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <input className='btn btn-block' type='submit' value='Add Idea'/>          
        </form>
    )
}

export default AddCard