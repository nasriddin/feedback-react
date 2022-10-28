import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState(
    {
      item: {},
      edit: false
    }
  )
  const [feedback, setFeedback] = useState([]);

  useEffect(()=>{

  }, [])

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete!")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  
  const editFeedback = (item) => {
    setFeedbackEdit({
      item:item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedItem) =>{
    setFeedback(feedback.map((element)=> (id === element.id ? {...element, ...updatedItem} : element)))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
