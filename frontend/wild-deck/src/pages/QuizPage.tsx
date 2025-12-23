import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { Card } from "../types";

type QuizState = "MENU" | "PLAYING" | "FINISHED";
type Category = "animals" | "plants";

interface Question {
  id: number;
  question: string;
  category: string;
  incorrect_answer1: string;
  incorrect_answer2: string;
  incorrect_answer3: string;
  correct_answer: string;
  explanation: string;
}

interface TestStartResponse {
  testId: number;
  questions: Question[];
}

interface UserAnswerDTO {
  questionId: number;
  userAnswer: string;
}

interface TestResultResponse {
  testId: number;
  totalQuestions: number;
  correctAnswers: number;
}

export const QuizPage = () => {
  const [unlockedCard, setUnlockedCard] = useState<Card | null>(null);

  const { user } = useAuth();
  const token = user?.token;

  const navigate = useNavigate();

  const [gameState, setGameState] = useState<QuizState>("MENU");
  const [category, setCategory] = useState<Category | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [testId, setTestId] = useState<number | null>(null);
  const [answers, setAnswers] = useState<UserAnswerDTO[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const options = useMemo(() => {
    if (!currentQuestion) return [];
    const opts = [
      currentQuestion.incorrect_answer1,
      currentQuestion.incorrect_answer2,
      currentQuestion.incorrect_answer3,
      currentQuestion.correct_answer,
    ];
    return opts.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const startGame = async (cat: Category) => {
    setCategory(cat);
    setGameState("PLAYING");
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setTestId(null);
    setAnswers([]);
    setUnlockedCard(null);

    try {
      const res = await fetch(
        `http://localhost:8080/api/tests/start?category=${cat}&numberOfQuestions=5`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error ${res.status}: ${text}`);
      }

      const data: TestStartResponse = await res.json();
      setTestId(data.testId);
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error al iniciar el test", error);
    }
  };

  const handleAnswer = (option: string) => {
    if (showExplanation || !currentQuestion) return;

    setSelectedAnswer(option);
    setShowExplanation(true);

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        userAnswer: option,
      },
    ]);

    if (option === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    } else {
      if (!testId) return;

      try {
        // terminar test
        const res = await fetch("http://localhost:8080/api/tests/finish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          body: JSON.stringify({
            testId,
            answers,
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error finish ${res.status}: ${text}`);
        }

        const result: TestResultResponse = await res.json();
        setScore(result.correctAnswers);

        // pedir carta aleatoria desbloqueada
        const unlockRes = await fetch(
          "http://localhost:8080/api/cards/unlock-random",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );

        if (!unlockRes.ok) {
          const text = await unlockRes.text();
          throw new Error(`Error unlock ${unlockRes.status}: ${text}`);
        }

        const card: Card = await unlockRes.json();
        setUnlockedCard(card);

        setGameState("FINISHED");
      } catch (error) {
        console.error("Error al finalizar el test", error);
      }
    }
  };

  const restart = () => {
    setGameState("MENU");
    setCategory(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setTestId(null);
    setAnswers([]);
    setUnlockedCard(null);
  };

  /* ================= RENDER ================= */

  if (gameState === "MENU") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-linear-to-br from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-2 tracking-tight">WildDeck Quiz</h1>
        <p className="text-gray-400 mb-12 text-xl">
          Pon a prueba tu conocimiento sobre la naturaleza
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <button
            onClick={() => startGame("animals")}
            className="group relative h-64 rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-orange-600/30 transition-colors" />
            <img
              src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=800"
              alt="Animales"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-4xl mb-2">🐾</span>
              <h2 className="text-3xl font-bold">Animales</h2>
            </div>
          </button>

          <button
            onClick={() => startGame("plants")}
            className="group relative h-64 rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-green-600/20 group-hover:bg-green-600/30 transition-colors" />
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
              alt="Plantas"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-4xl mb-2">🌿</span>
              <h2 className="text-3xl font-bold">Plantas</h2>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "FINISHED") {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-gray-900 text-white p-4">
        <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full border border-gray-700">
          <h2 className="text-4xl font-bold mb-6">¡Test Completado!</h2>
          <h2 className="text-2xl font-bold mb-4">Carta desbloqueada</h2>

          {unlockedCard && (
            <>
              <img
                src={unlockedCard.image}
                alt={unlockedCard.name}
                className="mx-auto mb-4"
              />
              <p className="text-xl font-semibold mb-4">{unlockedCard.name}</p>
            </>
          )}

          <div className="text-8xl font-black mb-6">
            {score}/{questions.length}
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={restart}
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100"
            >
              Volver al Menú
            </button>
            <button
              onClick={() => navigate("/collection")}
              className="px-8 py-3 border border-gray-600 font-bold rounded-full hover:bg-gray-700"
            >
              Ver Colección
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white p-6 md:p-12">
      <div className="flex justify-between items-center mb-8">
        <button onClick={restart} className="text-gray-400 hover:text-white">
          &larr; Salir
        </button>
        <div className="bg-gray-800 px-4 py-1 rounded-full">
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </div>
        <div className="bg-gray-800 px-4 py-1 rounded-full text-green-400">
          Aciertos: {score}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center max-w-4xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          {currentQuestion?.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
          {options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion?.correct_answer;

            let btnClass =
              "bg-gray-800 hover:bg-gray-700 border-2 border-transparent";

            if (showExplanation) {
              if (isCorrect) btnClass = "bg-green-900/50 border-green-500";
              else if (isSelected) btnClass = "bg-red-900/50 border-red-500";
              else btnClass = "bg-gray-800 opacity-50";
            }

            return (
              <button
                key={idx}
                disabled={showExplanation}
                onClick={() => handleAnswer(option)}
                className={`p-6 rounded-2xl text-lg transition-all ${btnClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="w-full bg-gray-800 p-6 rounded-xl">
            <p className="mb-6">
              Respuesta correcta:{" "}
              <strong>{currentQuestion?.explanation}</strong>
            </p>
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-500 rounded-xl"
              >
                {currentQuestionIndex < questions.length - 1
                  ? "Siguiente"
                  : "Ver Resultados"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
