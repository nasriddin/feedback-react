import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
// Calculate avarage rating
const {feedback} = useContext(FeedbackContext)

  let avarage = feedback.reduce((acc, cur)=>{
    return acc + cur.rating
  }, 0) / feedback.length;

  avarage = avarage.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage rating: {isNaN(avarage) ? 0 : avarage}</h4>

    </div>
  )
}

export default FeedbackStats