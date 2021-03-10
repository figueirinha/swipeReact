import TinderCard from 'react-tinder-card'
import './Card.css'

const Card = ({ideas, onSwipe}) => {    

    return(
        <div className='card'>
            <div>
                {ideas.map((idea) => (
                    <TinderCard   
                        onSwipe={(dir) => onSwipe(dir, idea.id)}                   
                        key={idea.id}
                        preventSwipe={['up', 'down']}  
                    >
                        <div className='card_content'>
                            <h3>{idea.title}</h3>
                            <p>{idea.text}</p>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Card