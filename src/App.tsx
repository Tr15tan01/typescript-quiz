import React, { useState } from 'react';
import './App.css';
import { GlobalStyle, Wrapper } from './App.Styles'

//components
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
//types
import { QuestionState, Difficulty } from './API';

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [
		loading,
		setLoading
	] = useState(false);
	const [
		questions,
		setQuestions
	] = useState<QuestionState[]>([]);
	const [
		number,
		setNumber
	] = useState(0);
	const [
		userAnswers,
		setUserAnswers
	] = useState<AnswerObject[]>([]);
	const [
		score,
		setScore
	] = useState(0);
	const [
		gameOver,
		setGameOver
	] = useState(true);

	console.log('fetchQuizQuestions', fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			//user answer
			const answer = e.currentTarget.value;
			//check answers
			const correct = questions[number].correct_answer === answer;
			//add score
			if (correct) setScore((prev) => prev + 1);
			//save answer in awrray
			const AnswerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer
			};

			setUserAnswers((prev) => [
				...prev,
				AnswerObject
			]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;

		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true)
		} else {
			setNumber(nextQuestion)
		}
	};

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1>QUIZ</h1>
				{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
					<button className="start" onClick={startTrivia}>
						Start The Quiz
					</button>
				) : null}

				{!gameOver ? <p className="score">Score: {score}</p> : null}
				{loading ? <p>Loading Questions...</p> : null}
				{!loading &&
					!gameOver && (
						<QuestionCard
							questionNr={number + 1}
							totalQuestions={TOTAL_QUESTIONS}
							question={questions[number].question}
							answer={questions[number].answers}
							userAnswer={userAnswers ? userAnswers[number] : undefined}
							callback={checkAnswer}
						/>
					)}
				{!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
					<button className="next" onClick={nextQuestion}>
						Next Question
					</button>
				) : null}
			</Wrapper>
		</>
	);
};

export default App;
