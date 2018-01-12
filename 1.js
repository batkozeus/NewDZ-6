// Task 1

const charCountInfo = document.getElementById('charCount');
const newLetterMassInfo = document.getElementById('newLetterMass');
const startTaskInfo = document.getElementById('startTask');
const errors = document.getElementById('errors');

const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

    charCount: function setCharCount () {
    	let checkPositiveInteger = (x) => ((x <= 0) || (x%1!=0));
    	let symbolQuant;
    	do {
    		symbolQuant = prompt(`Введите количество символов`, `Количество символов`);
//     		if (symbolQuant == null) {
//     			break;
//     		}
    	}
    	while (
    		checkPositiveInteger(symbolQuant)
    	)
    	console.log(symbolQuant);
    	
    	charCountInfo.innerHTML = `Количество введенных символов - ${symbolQuant}`;
    	return symbolQuant;
    },

	task: function createTask () {
		let letterMass = [];
		letterMass.length = keyTrainer.charCount();
		let letterMassLength = letterMass.length;
		let randomLetter;
		for (let i=0; i<letterMassLength; i++) {
			randomLetter = Math.floor(this.chars.length * Math.random());
			letterMass[i] = this.chars[randomLetter];
		}
		console.log(letterMass);

		let newLetterMass = letterMass.join('');

		let startTask = prompt(`Введите увиденную строку ${newLetterMass}`, newLetterMass);

		keyTrainer.userInput = startTask;

		let count = 0;

		for (let j=0; j<newLetterMass.length; j++) {
			// for (let k=0; k<newLetterMass.length; k++) {
			// 	if (j==k) {
					if (startTask[j] == newLetterMass[j]) {
						continue;
					}
					else {
						count += 1;
					}
			// 	}
			// }
		}

		console.log(count);

		keyTrainer.userErrors = count;


		if (keyTrainer.userErrors == 0) {
			alert(`Поздравления, все символы введены правильно!`);
			errors.innerHTML = `Поздравления, все символы введены правильно!`;
		}
		else {
			alert(`Количество ваших ошибок - ${keyTrainer.userErrors}. Успехов в следующем упражнении!`);
			errors.innerHTML = `Количество ваших ошибок - ${keyTrainer.userErrors}. Успехов в следующем упражнении!`;
		}
		
		console.log(startTask);
		console.log(newLetterMass);

		newLetterMassInfo.innerHTML = `Случайная строка - ${newLetterMass}`;
		startTaskInfo.innerHTML = `Введеная строка - ${startTask}`;

	},

	userInput: '',

	userErrors: ''

};

let run = () => keyTrainer.task();

run();






