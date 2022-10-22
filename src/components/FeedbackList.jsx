import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelelte}) {
if(!feedback || feedback.length === 0){
    return (<p>No feedback yet</p>)
}

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelelte={handleDelelte} />
            ))
        }
    </div>
  )
}

export default FeedbackList