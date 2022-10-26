import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </div>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <AboutIcon />
      </Router>
    </FeedbackProvider>
  );
}
export default App;
