import React, {useState} from 'react'
import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('');
    const handleTextChange = (e) =>{
        setText(e.target.value)
        // console.log()
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* @TODO - Rating select component */}
            <div className='input-group'>
                <input type="text" placeholder='Write a review' value={text} onChange={handleTextChange}/>
                <button type='submit'>Submit</button>
            </div>
        </form>

    </Card>
  )
}

export default FeedbackForm