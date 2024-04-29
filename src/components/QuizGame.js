import React, { useState } from 'react'

export default function QuizGame() {
    const [questions, setQuestions] = useState([
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        }
    ])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState("")
    const [showResult, setShowResult] = useState(false)

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setShowResult(true)
    }

    const handleNextQuestion = () => {
        setShowResult(false)
        setSelectedOption("")
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length)
    }

    const currentQuestion = questions[currentQuestionIndex]

    return (
        <div>
            <h1>Quiz Game</h1>
            <p>{currentQuestion.question}</p>
            <ul>
                {currentQuestion.options.map((option, index) => (
                    <li key={index}
                        onClick={() => handleOptionClick(option)}
                        style={{ cursor: "pointer", color: selectedOption === option ? "blue" : "black" }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            {showResult && (
                <div>
                    {selectedOption === currentQuestion.correctAnswer ? (
                        <p style={{ color: "green" }}>Correct!</p>
                    ) : (
                        <p style={{ color: "red" }}>Incorrect!</p>
                    )}
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            )}
        </div>
    )
}
