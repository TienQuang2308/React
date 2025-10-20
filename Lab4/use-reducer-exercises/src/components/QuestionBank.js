import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// ---------------- INITIAL STATE ----------------
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  timeLeft: 10,
  highScore: parseInt(localStorage.getItem("highScore")) || 0,
};

// ---------------- REDUCER ----------------
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION": {
      const selected = action.payload;
      const correctAnswer = state.questions[state.currentQuestion].answer;
      const isCorrect = selected === correctAnswer;
      const feedback = isCorrect
        ? `✅ Correct! 🎉`
        : `❌ Incorrect! The correct answer is ${correctAnswer}.`;
      return { ...state, selectedOption: selected, feedback };
    }

    case "TICK": {
      const newTime = state.timeLeft - 1;
      if (newTime <= 0) {
        // Hết thời gian, tự động sang câu tiếp theo
        return {
          ...state,
          feedback: `⏰ Time's up! The correct answer is ${
            state.questions[state.currentQuestion].answer
          }.`,
          timeLeft: 0,
        };
      }
      return { ...state, timeLeft: newTime };
    }

    case "NEXT_QUESTION": {
      const { selectedOption, currentQuestion, questions, score } = state;
      const isCorrect =
        selectedOption === questions[currentQuestion].answer;

      const newScore = isCorrect ? score + 1 : score;
      const nextIndex = currentQuestion + 1;
      const finished = nextIndex === questions.length;

      // Cập nhật highScore khi hoàn thành quiz
      const newHighScore = finished
        ? Math.max(newScore, state.highScore)
        : state.highScore;

      if (finished) {
        localStorage.setItem("highScore", newHighScore);
      }

      return {
        ...state,
        score: newScore,
        currentQuestion: nextIndex,
        selectedOption: "",
        feedback: "",
        showScore: finished,
        timeLeft: 10,
        highScore: newHighScore,
      };
    }

    case "RESET_FEEDBACK":
      return { ...state, feedback: "" };

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: parseInt(localStorage.getItem("highScore")) || 0,
      };

    case "RESET_TIMER":
      return { ...state, timeLeft: 10 };

    default:
      return state;
  }
}

// ---------------- COMPONENT ----------------
export default function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
    timeLeft,
    highScore,
  } = state;

  const question = questions[currentQuestion];

  // ---------------- TIMER EFFECT ----------------
  useEffect(() => {
    if (showScore || feedback.startsWith("⏰")) return;

    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showScore, feedback]);

  // Nếu hết thời gian mà chưa chọn đáp án, tự chuyển câu sau 2s
  useEffect(() => {
    if (timeLeft === 0 && !showScore) {
      const timeout = setTimeout(() => {
        dispatch({ type: "NEXT_QUESTION" });
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [timeLeft, showScore]);

  // ---------------- HANDLERS ----------------
  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  // ---------------- RENDER ----------------
  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        {showScore ? (
          <div className="text-center">
            <h2>
              ✅ Your Score: {score} / {questions.length}
            </h2>
            <h4 className="text-success mt-2">
              🏆 High Score: {highScore}
            </h4>
            <Button variant="primary" onClick={handleRestartQuiz} className="mt-3">
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            {/* Tiến trình */}
            <h5 className="text-secondary mb-3">
              Question {currentQuestion + 1} / {questions.length}
            </h5>
            <ProgressBar
              now={((currentQuestion + 1) / questions.length) * 100}
              className="mb-3"
            />

            {/* Đồng hồ */}
            <div
              className={`fw-bold ${
                timeLeft <= 5 ? "text-danger" : "text-primary"
              }`}
            >
              ⏱ Time left: {timeLeft}s
            </div>

            {/* Câu hỏi */}
            <h4 className="mt-3">{question.question}</h4>

            {/* Các lựa chọn */}
            <div className="mt-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option
                      ? "success"
                      : "outline-secondary"
                  }
                  className="m-2"
                  disabled={!!selectedOption}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Phản hồi */}
            {feedback && (
              <div
                className={`mt-3 fw-bold ${
                  feedback.startsWith("✅")
                    ? "text-success"
                    : feedback.startsWith("❌")
                    ? "text-danger"
                    : "text-warning"
                }`}
              >
                {feedback.startsWith("✅") ? (
                  <FaCheckCircle className="me-2" />
                ) : feedback.startsWith("❌") ? (
                  <FaTimesCircle className="me-2" />
                ) : null}
                {feedback}
              </div>
            )}

            {/* Nút Next */}
            <Button
              variant="primary"
              className="mt-4"
              disabled={!selectedOption && timeLeft > 0}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}
