import React, { useEffect, useState } from "react";
import "../Styles/Textes.css";
import "../Styles/Buttons.css";
import { motion } from "framer-motion";

const QuizAleatoire = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    try {
      const data = require("../Data/QuestionsReponses.json");
      setQuestions(data.questions);
    } catch (error) {
      console.error("Erreur lors du chargement des questions", error);
    }
  };

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    setCurrentQuestion(question);
    setShowAnswer(false);
  };

  const showQuestionAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="h-100 w-100 d-flex flex-column align-items-center just-color-white">
      <div className="w-50">
        <motion.button
          whileHover={{
            scale: 1.1,
            cursor: "pointer",
          }}
          whileTap={{ scale: 1 }}
          onClick={generateQuestion}
          className="btn-quetes-valider just-color-white log-size my-5"
        >
          Générer une question
        </motion.button>
      </div>
      {currentQuestion && (
        <div className="h-75 d-flex flex-column justify-content-between">
          <h3 className="mt-3 just-color-yellow">Question :</h3>
          <p className="mx-2 my-2 log-size">{currentQuestion.question}</p>
          {!showAnswer && (
            <div>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  cursor: "pointer",
                }}
                whileTap={{ scale: 1 }}
                onClick={showQuestionAnswer}
                className="btn-quetes-valider just-color-white log-size my-5"
              >
                Afficher la réponse
              </motion.button>
            </div>
          )}
          {showAnswer && (
            <div>
              <h3 className="my-4 just-color-yellow">Réponse :</h3>
              <p className="mx-2 my-2 log-size">{currentQuestion.answer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizAleatoire;
