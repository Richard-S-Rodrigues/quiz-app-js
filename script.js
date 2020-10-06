const startBtn = document.getElementById('startBtn')
const answerContainer = document.querySelector('.answer-container')
const questionElement = document.getElementById('question')

let score = 0, currentQuestionIndex = 0, sortedQuestions

startBtn.addEventListener('click', startGame)



// Start the game
function startGame() {
	// Hide start content
	startBtn.setAttribute('hidden', true)
	document.getElementById('title').setAttribute('hidden', true)
	document.getElementById('paragraph').setAttribute('hidden', true)

	sortedQuestions = questions.sort()
	currentQuestionIndex = 0
	setNextQuestion()
}

// Set new question
function setNextQuestion() {

	setClear()
	renderQuestion(sortedQuestions[currentQuestionIndex])
}

// Clear answers
function setClear() {
	while (answerContainer.firstChild) {
   		answerContainer.removeChild(answerContainer.firstChild)
  	}
	
}

// Render the question
function renderQuestion(question) {

	questionElement.innerText = questions[currentQuestionIndex].question

	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('choiceBtn')

		button.addEventListener('click', selectAnswer)
		answerContainer.appendChild(button)
	})
   
}

// Get progress bar
let progress = 0
let progressBar = document.getElementById('progress-bar')

// Select the answer
function selectAnswer(element) {

	// Set next question until it ends
	if(currentQuestionIndex < sortedQuestions.length -1) {
		let answer = element.target.textContent
		// Correct answer
		let correctValue = sortedQuestions[currentQuestionIndex].answers.find(item => item.correct).text

		if( answer === correctValue) {
			score++

		} else {

		}

		currentQuestionIndex++	
		setNextQuestion()

		// Set progress
		progress++
		progressBar.value = progress
	} else{
		setClear()
		showScore()

	}
	 

} 

// Show score 
function showScore() {

	questionElement.setAttribute('hidden', true)

	answerContainer.innerHTML = `
		<div class="score-container">
			<h2>SCORE:</h2>
			<p>${score}/${sortedQuestions.length - 1}</p>
			<button class="restartBtn" onclick="location.reload()">Restart</button>
		</div>
		
	`

}


const questions = [
	{
		question: 
			'Which of the following function of String object would compare a regular expression with a string?',
		answers: [
			{
				text: 'search()',
				correct: false
			},
			{
				text: 'concat()',
				correct: false
			},
			{
				text: 'match()',
				correct: true
			},
			{
				text: 'replace()',
				correct: false
			},
				
		]
	},
	{
		question: 'Which of the following functions of Number object would display output in exponential format?',
		answers: [
			{
				text: 'toFixed()',
				correct: false
			},
			{
				text: 'toExponential()',
				correct: true
			},
			{
				text: 'toPrecision()',
				correct: false
			},
			{
				text: 'toLocaleString()',
				correct: false
			},
		]
	},
	{
		question: 'Which of the following function of String object returns the capitalized string while respecting the current locale?',
		answers: [
			{
				text: 'toString()',
				correct: false
			},
			{
				text: 'toLocaleUpperCase()',
				correct: true
			},
			{
				text: 'toUpperCase()',
				correct: false
			},
			{
				text: 'substring()',
				correct: false
			},
		]
	},
	{
		question: 'What is the function of Array object that adds and/or removes elements from an array?',
		answers: [
			{
				text: 'splice()',
				correct: true
			},
			{
				text: 'sort()',
				correct: false
			},
			{
				text: 'unshift()',
				correct: false
			},
			{
				text: 'toSource()',
				correct: false
			},
		]
	},
	{
		question: 'Which of the following methods removes the last element from an array and returns that element?',
		answers: [
			{
				text: 'get()',
				correct: false
			},
			{
				text: 'last()',
				correct: false
			},
			{
				text: 'None',
				correct: false
			},
			{
				text: 'pop()',
				correct: true
			},
		]
	},
	{
	question: 'What is the function of Array object that runs through each element of the array?',
		answers: [
			{
				text: 'every()',
				correct: false
			},
			{
				text: 'concat()',
				correct: false
			},
			{
				text: 'filter()',
				correct: false
			},
			{
				text: 'forEach()',
				correct: true
			},
		]
	},
	{
		question: 'How do you round the number 7.25, to the nearest integer?',
		answers: [
			{
				text: 'Math.round(7.25)',
				correct: true
			},
			{
			text: 'Math.rnd(7.25)',
				correct: false
			},
			{
				text: 'rnd(7.25)',
				correct: false
			},
			{
				text: 'round(7.25)',
				correct: false
			},
		]
	},
	{
		question: 'How do you find the number with the highest value of x and y?',
		answers: [
			{
				text: 'ceil(x,y)',
				correct: false
			},
			{
				text: 'Math.ceil(x,y)',
				correct: false
			},
			{
				text: 'top(x,y)',
				correct: false
			},
			{
				text: 'Math.max(x,y)',
				correct: true
			},
		]
	},
	{
		question: 'The result of: Number("1") - 1 == 0',
		answers: [
			{
				text: 'true',
				correct: true
			},
			{
				text: 'false',
				correct: false
			},
			{
				text: 'TypeError',
				correct: false
			},
			{
				text: 'NaN',
				correct: false
			},
		]
	},
	{
		question: 'How does Java Script store dates in objects of Date type? ',
		answers: [
			{
				text: 'The number of days since January 1st, 1900 ',
				correct: false
			},
			{
				text: 'The number of seconds since January 1st, 1970',
			correct: false
			},
			{
				text: 'The number of milliseconds since January 1st, 1970 ',
				correct: true
			},
			{
				text: 'The number of picoseconds since January 1st, 1970',
				correct: false
			},
		]
	},

	{
		question: '',
		answers: [
			{text: 'Get Your Score'}	
		]
	}
]

