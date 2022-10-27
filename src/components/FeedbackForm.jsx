import React, { useContext, useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./shared/RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit && feedbackEdit.edit){
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      setBtnDisabled(false)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
    // console.log()
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
        const newFeedback = {
            text: text,
            rating: rating
        }
        if(feedbackEdit.edit){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
          addFeedback(newFeedback)
        }
        setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
