// Define variables for all elements
const startContent = document.getElementById("start-content");
const formContent = document.getElementById("form-content");
const progressBar = document.getElementById("progress-bar");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");
const continue0Btn = document.getElementById("continue0");
const continue1Btn = document.getElementById("continue1");
const continue2Btn = document.getElementById("continue2");
const continue3Btn = document.getElementById("continue3");
const back1Btn = document.getElementById("back1");
const back2Btn = document.getElementById("back2");
const back3Btn = document.getElementById("back3");

let currentState = 0; // Initialize current state to state 0
let mobileState = 0; // Initialize current state to state 0
let flowState = 0; // Initialize current state to state 0
let radioState = 0; // Initialize current state to state 0
let checkState = 0; // Initialize current state to state 0

let submitState = 0; // Initialize current state to state 0

let hasError = 0; // Initialize current state to state 0

window.onload = peristentState;

/*
Notes for validation system:
For Checkbox and Radio validation focus priority is last
No file upload validation
No recaptcha validation
*/

function peristentState() {
	// persistentState checks the state of selection and onload sets accordingly

	let radio1A = document.getElementById("researchcollaboration1");
	let radio1B = document.getElementById("researchcollaboration2");
	let radio1C = document.getElementById("researchcollaboration3");
	let radio1D = document.getElementById("researchcollaboration4");

	let radio2A = document.getElementById("nationalprogrammeradio1");
	let radio2B = document.getElementById("nationalprogrammeradio2");

	let check1A = document.getElementById("researchdomain5");

	if (radio1A.checked) {
		handleRadioChange("A");
	}
	if (radio1B.checked) {
		handleRadioChange("B");
	}
	if (radio1C.checked) {
		handleRadioChange("C");
	}
	if (radio1D.checked) {
		handleRadioChange("D");
	}

	if (radio2A.checked) {
		noyesChange("A");
	}
	if (radio2B.checked) {
		noyesChange("B");
	}

	if (radio2B.checked) {
		noyesChange("B");
	}
	if (radio2B.checked) {
		noyesChange("B");
	}

	if (check1A.checked) {
		handleCheckboxChange();
	}
}

// Select all elements with the class name "required"
const elements = document.getElementsByClassName("required");

// Loop through each element and modify its HTML content
for (let i = 0; i < elements.length; i++) {
	const element = elements[i];

	// Create a new HTML string for the red asterisk
	const asteriskHTML = '<span style="color: #f4333d; font-size: 12px">*</span>';

	// Insert the HTML string after the existing text
	element.innerHTML += asteriskHTML;
}

function updateState(currentState) {
	// Add event listeners for each button to change the state accordingly
	if (currentState === 0) {
		startContent.style.display = "flex";
		formContent.style.display = "none";
	}

	var flowCElements = document.getElementsByClassName("flow-c");
	for (var i = 0; i < flowCElements.length; i++) {
		flowCElements[i].classList.remove("flow-block");
	}

	// State 1 - SM Mobile Viewport, Dot 1
	if (currentState === 1) {
		startContent.style.display = "none";
		formContent.style.display = "flex";
		progressBar.style.display = "flex";
		step1.style.display = "flex";
		step2.style.display = "none";
		step3.style.display = "none";
		step4.style.display = "none";
		setProgressState(1);
	}

	// State 2 - SM Mobile Viewport, Dot 2
	if (currentState === 2) {
		startContent.style.display = "none";
		formContent.style.display = "flex";
		progressBar.style.display = "flex";
		step1.style.display = "none";
		step2.style.display = "flex";
		step3.style.display = "none";
		step4.style.display = "none";
		setProgressState(2);
	}

	// State 3 - SM Mobile Viewport, Dot 3

	if (currentState === 3) {
		startContent.style.display = "none";
		formContent.style.display = "flex";
		progressBar.style.display = "flex";
		step1.style.display = "none";
		step2.style.display = "none";
		step3.style.display = "flex";
		step4.style.display = "none";
		setProgressState(3);
	}

	// State 4 - SM Mobile Viewport, Dot 4
	if (currentState === 4) {
		var flowCElements = document.getElementsByClassName("flow-c");
		for (var i = 0; i < flowCElements.length; i++) {
			flowCElements[i].classList.add("flow-block");
		}
		startContent.style.display = "none";
		formContent.style.display = "flex";
		progressBar.style.display = "flex";
		step1.style.display = "none";
		step2.style.display = "none";
		step3.style.display = "none";
		step4.style.display = "flex";
		setProgressState(4);
	}

	// State 5 - MD Tablet Viewport

	if (currentState === 5) {
		var flowCElements = document.getElementsByClassName("flow-c");

		if (flowState === 1 || flowState === 2 || flowState === 3 || flowState === 4) {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.add("flow-block");
			}
		} else {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.remove("flow-block");
			}
		}
		startContent.style.display = "none";
		formContent.style.display = "flex";
		progressBar.style.display = "flex";
		step1.style.display = "flex";
		step2.style.display = "flex";
		step3.style.display = "flex";
		step4.style.display = "flex";
	}

	// State 6 - LG Desktop Viewport

	if (currentState === 6) {
		var flowCElements = document.getElementsByClassName("flow-c");

		if (flowState === 1 || flowState === 2 || flowState === 3 || flowState === 4) {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.add("flow-block");
			}
		} else {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.remove("flow-block");
			}
		}
		startContent.style.display = "flex";
		formContent.style.display = "flex";
		progressBar.style.display = "flex";
		step1.style.display = "flex";
		step2.style.display = "flex";
		step3.style.display = "flex";
		step4.style.display = "flex";
	}
}

// Get the viewport width at page load
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// set viewport on load

if (viewportWidth > 992) {
	updateState(6);
} else {
	updateState(0);
}

// state management

continue0Btn.addEventListener("click", function () {
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	mobileState = 1;
	if (viewportWidth > 768) {
		updateState(5);
	} else {
		updateState(1);
	}
});

continue1Btn.addEventListener("click", function () {
	mobileState = 2;
	updateState(2);
});
continue2Btn.addEventListener("click", function () {
	mobileState = 3;
	updateState(3);
});
continue3Btn.addEventListener("click", function () {
	mobileState = 4;
	updateState(4);
});

back1Btn.addEventListener("click", function () {
	mobileState = 1;
	updateState(1);
});

back2Btn.addEventListener("click", function () {
	mobileState = 2;
	updateState(2);
});

back3Btn.addEventListener("click", function () {
	mobileState = 3;
	updateState(3);
});

// Add event listener to check viewport size on resize
window.addEventListener("resize", function () {
	// Get the updated viewport width
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

	// If viewport width is greater than 1024px (laptop size)
	if (viewportWidth > 992) {
		// Show the element with ID "start-content"
		updateState(6);
	} else if (viewportWidth > 768) {
		if (mobileState === 0) {
			updateState(0);
		} else {
			updateState(5);
		}
	} else {
		// Hide the element with ID "start-content"
		updateState(mobileState);
	}
});

// progress bar

// Store the progress elements in an array
const progressElems = [document.getElementById("dot-1"), document.getElementById("progress-line-1"), document.getElementById("dot-2"), document.getElementById("progress-line-2"), document.getElementById("dot-3"), document.getElementById("progress-line-3"), document.getElementById("dot-4")];

// Set the initial state of the progress bar
setProgressState(1);

function setProgressState(state) {
	// Loop through each progress element and update its color
	for (let i = 0; i < progressElems.length; i++) {
		// If state 1 is selected, change dot1 to red, and everything else to gray
		if (state === 1) {
			if (i === 0) {
				progressElems[i].classList.add("dot-red");
			} else {
				progressElems[i].classList.remove("dot-red");
			}
			removeProgressBar(1);
			removeProgressBar(2);
			removeProgressBar(3);
		}
		// If state 2 is selected, change dot1, line1, and dot2 to red, and everything else to gray
		if (state === 2) {
			if (i === 0 || i === 1 || i === 2) {
				progressElems[i].classList.add("dot-red");
			} else {
				progressElems[i].classList.remove("dot-red");
			}
			startProgressBar(1);
			removeProgressBar(2);
			removeProgressBar(3);
		}
		// If state 3 is selected, change dot1, line1, dot2, and line2 to red, and everything else to gray
		if (state === 3) {
			if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) {
				progressElems[i].classList.add("dot-red");
			} else {
				progressElems[i].classList.remove("dot-red");
			}
			setProgressBar(1);
			startProgressBar(2);
			removeProgressBar(3);
		}
		// If state 4 is selected, change everything to red
		if (state === 4) {
			progressElems[i].classList.add("dot-red");
			if (i % 2 === 1) {
			}
			setProgressBar(1);
			setProgressBar(2);
			startProgressBar(3);
		}
	}
}

// Example usage: set the progress bar to state 3
setProgressState(1);

const dot1 = document.getElementById("dot-1");

dot1.addEventListener("click", () => {
	mobileState = 1;
	updateState(1);
});
const dot2 = document.getElementById("dot-2");

dot2.addEventListener("click", () => {
	mobileState = 2;
	updateState(2);
});
const dot3 = document.getElementById("dot-3");

dot3.addEventListener("click", () => {
	mobileState = 3;
	updateState(3);
});
const dot4 = document.getElementById("dot-4");

dot4.addEventListener("click", () => {
	mobileState = 4;
	updateState(4);
});

function startProgressBar(bar) {
	// Get the progress bar element
	const progressBar1 = document.getElementById("progress-line-one");
	const progressBar2 = document.getElementById("progress-line-two");
	const progressBar3 = document.getElementById("progress-line-three");

	// Set the initial width to 0%
	let width = 0;
	let savedMobileState = mobileState;

	// Define the interval time in milliseconds
	const intervalTime = 2;

	// Define the increment value for each interval
	const increment = 1;

	// Set an interval to update the progress bar
	const interval = setInterval(function () {
		// Increment the width by the increment value
		width += increment;
		// Set the width of the progress bar element
		if (bar === 1) {
			progressBar1.style.width = width + "%";
		}
		if (bar === 2) {
			progressBar2.style.width = width + "%";
		}
		if (bar === 3) {
			progressBar3.style.width = width + "%";
		}

		// If the width is equal to or greater than 100%, stop the interval
		if (width >= 100) {
			clearInterval(interval);
		}

		if (savedMobileState > mobileState) {
			if (bar === 1) {
				progressBar1.style.width = 0 + "%";
			}
			if (bar === 2) {
				progressBar2.style.width = 0 + "%";
			}
			if (bar === 3) {
				progressBar3.style.width = 0 + "%";
			}
			return;
		}

		if (savedMobileState < mobileState) {
			if (bar === 1) {
				progressBar1.style.width = 100 + "%";
			}
			if (bar === 2) {
				progressBar2.style.width = 100 + "%";
			}
			if (bar === 3) {
				progressBar3.style.width = 100 + "%";
			}
			return;
		}
	}, intervalTime);
}

function removeProgressBar(bar) {
	// Get the progress bar element
	const progressBar1 = document.getElementById("progress-line-one");
	const progressBar2 = document.getElementById("progress-line-two");
	const progressBar3 = document.getElementById("progress-line-three");

	if (bar === 1) {
		progressBar1.style.width = 0 + "%";
	}
	if (bar === 2) {
		progressBar2.style.width = 0 + "%";
	}
	if (bar === 3) {
		progressBar3.style.width = 0 + "%";
	}
}
function setProgressBar(bar) {
	window.scroll(0, 0); // jump page to top

	// Get the progress bar element
	const progressBar1 = document.getElementById("progress-line-one");
	const progressBar2 = document.getElementById("progress-line-two");
	const progressBar3 = document.getElementById("progress-line-three");

	if (bar === 1) {
		progressBar1.style.width = 100 + "%";
	}
	if (bar === 2) {
		progressBar2.style.width = 100 + "%";
	}
	if (bar === 3) {
		progressBar3.style.width = 100 + "%";
	}
}

// additional validations 2.0

function selectInputField(inputId) {
	var inputField = document.getElementById(inputId);
	inputField.focus();
	addFocusClass(inputId);
}

function addFocusClass(inputId) {
	var formField = document.getElementById(inputId).parentNode.parentNode;
	formField.classList.add("border-focus");
}

function removeFocusClass(inputId) {
	var formField = document.getElementById(inputId).parentNode.parentNode;
	formField.classList.remove("border-focus");
}

function validateFormField(inputId) {
	var inputField = document.getElementById(inputId);
	var errorMessage = document.getElementById(inputId + "-error");
	var formField = inputField.parentNode.parentNode;
	var value = inputField.value.trim();
	var validationType = inputField.dataset.validation;
	var customErrorMessage = inputField.dataset.errorMessage;

	if (validationType.includes("required")) {
		if (value === "") {
			errorMessage.textContent = customErrorMessage || "This field is required";
			errorMessage.classList.add("error-message-show");
			inputField.classList.add("error");
			formField.classList.add("error-field");
			hasError = 1;
		} else {
			errorMessage.textContent = "";
			errorMessage.classList.remove("error-message-show");
			inputField.classList.remove("error");
			formField.classList.remove("error-field");
		}
	}

	if (validationType.includes("userid")) {
		if (value === "") {
			errorMessage.textContent = customErrorMessage || "This field is required";
			errorMessage.classList.add("error-message-show");
			inputField.classList.add("error");
			formField.classList.add("error-field");
			hasError = 1;
		} else if (value.length > 8) {
			errorMessage.textContent = "User ID must be 8 characters or less.";
			errorMessage.classList.add("error-message-show");
			inputField.classList.add("error");
			formField.classList.add("error-field");
			hasError = 1;
		} else {
			errorMessage.textContent = "";
			errorMessage.classList.remove("error-message-show");
			inputField.classList.remove("error");
			formField.classList.remove("error-field");
		}
	}

	if (validationType.includes("email")) {
		if (value === "") {
			errorMessage.textContent = customErrorMessage || "This field is required";
			errorMessage.classList.add("error-message-show");
			inputField.classList.add("error");
			formField.classList.add("error-field");
			hasError = 1;
		} else if (value.includes("@gmail.com") || value.includes("@yahoo.com") || value.includes("@hotmail.com") || value.includes("@outlook.com") || value.includes("@live.com")) {
			errorMessage.textContent = customErrorMessage || "Please enter a valid email address that is not from a personal domain. Email accounts ending with gmail.com, yahoo.com, hotmail.com, etc are not allowed.";
			errorMessage.classList.add("error-message-show");
			inputField.classList.add("error");
			formField.classList.add("error-field");
			hasError = 1;
		} else {
			errorMessage.textContent = "";
			errorMessage.classList.remove("error-message-show");
			inputField.classList.remove("error");
			formField.classList.remove("error-field");
		}
	}

	if (validationType.includes("checkbox")) {
		let inputIdcheckbox = document.getElementById(inputId);

		if (inputIdcheckbox.checked) {
			errorMessage.textContent = "";
			errorMessage.classList.remove("error-message-show");
		} else {
			errorMessage.textContent = customErrorMessage || "This field is required";
			errorMessage.classList.add("error-message-show");

			hasError = 1;
		}
	}

	// Add more validation types as needed
}

function handleRadioChange(selection) {
	// Get all elements with class name "flow-a", "flow-b", and "flow-c"
	var flowAElements = document.getElementsByClassName("flow-a");
	var flowBElements = document.getElementsByClassName("flow-b");
	var flowCElements = document.getElementsByClassName("flow-c");
	var optionBElements = document.getElementsByClassName("option-b");
	var optionCElements = document.getElementsByClassName("option-c");

	if (selection === "A") {
		flowState = 2;

		// Perform actions specific to option A
		for (var i = 0; i < flowAElements.length; i++) {
			flowAElements[i].classList.remove("flow-block");
		}

		for (var i = 0; i < flowBElements.length; i++) {
			flowBElements[i].classList.add("flow-block");
		}

		if (mobileState === 3) {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.remove("flow-block");
			}
		} else {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.add("flow-block");
			}
		}
		for (var i = 0; i < optionBElements.length; i++) {
			optionBElements[i].classList.remove("flow-block");
		}

		for (var i = 0; i < optionCElements.length; i++) {
			optionCElements[i].classList.remove("flow-block");
		}
	} else if (selection === "B") {
		flowState = 1;

		// Add the "flow-block" class and change the display property
		for (var i = 0; i < flowAElements.length; i++) {
			flowAElements[i].classList.add("flow-block");
		}

		for (var i = 0; i < flowBElements.length; i++) {
			flowBElements[i].classList.remove("flow-block");
		}

		if (mobileState === 3) {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.remove("flow-block");
			}
		} else {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.add("flow-block");
			}
		}

		for (var i = 0; i < optionBElements.length; i++) {
			optionBElements[i].classList.add("flow-block");
		}

		for (var i = 0; i < optionCElements.length; i++) {
			optionCElements[i].classList.remove("flow-block");
		}
	} else if (selection === "C") {
		flowState = 3;

		// Perform actions specific to option C
		for (var i = 0; i < flowAElements.length; i++) {
			flowAElements[i].classList.add("flow-block");
		}

		for (var i = 0; i < flowBElements.length; i++) {
			flowBElements[i].classList.remove("flow-block");
		}

		if (mobileState === 3) {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.remove("flow-block");
			}
		} else {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.add("flow-block");
			}
		}

		for (var i = 0; i < optionBElements.length; i++) {
			optionBElements[i].classList.remove("flow-block");
		}

		for (var i = 0; i < optionCElements.length; i++) {
			optionCElements[i].classList.add("flow-block");
		}
	} else if (selection === "D") {
		flowState = 4;

		// Perform actions specific to option D
		for (var i = 0; i < flowAElements.length; i++) {
			flowAElements[i].classList.add("flow-block");
		}

		for (var i = 0; i < flowBElements.length; i++) {
			flowBElements[i].classList.remove("flow-block");
		}

		if (mobileState === 3) {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.remove("flow-block");
			}
		} else {
			for (var i = 0; i < flowCElements.length; i++) {
				flowCElements[i].classList.add("flow-block");
			}
		}
		for (var i = 0; i < optionBElements.length; i++) {
			optionBElements[i].classList.remove("flow-block");
		}

		for (var i = 0; i < optionCElements.length; i++) {
			optionCElements[i].classList.remove("flow-block");
		}
	} else {
		console.log("Invalid selection");
	}
}

function noyesChange(selection) {
	// Get all elements with class name "flow-a", "flow-b", and "flow-c"
	var yesField = document.getElementsByClassName("yesField");

	if (selection === "A") {
		radioState = 1;

		// Perform actions specific to option A
		for (var i = 0; i < yesField.length; i++) {
			yesField[i].classList.remove("flow-block");
		}
	} else if (selection === "B") {
		radioState = 2;

		for (var i = 0; i < yesField.length; i++) {
			yesField[i].classList.add("flow-block");
		}
	} else {
		console.log("Invalid selection");
	}
}

// Get the checkboxes and the "Other domains" input field
const othersCheckbox = document.getElementById("researchdomain5");
const otherDomainsField = document.querySelector(".flow-a .floating-label");

// Add event listener to the checkbox
othersCheckbox.addEventListener("change", handleCheckboxChange);

// Function to handle checkbox change
function handleCheckboxChange() {
	if (othersCheckbox.checked) {
		otherDomainsField.style.display = "block";
		checkState = 1;
	} else {
		otherDomainsField.style.display = "none";
		checkState = 0;
	}
}

// Get the submit button
const submitButton = document.getElementById("submit-button");

// Add event listener to the submit button
submitButton.addEventListener("click", validateFormFields);

// Function to validate all form fields
function validateFormFields() {
	// Get all form fields
	const formFields = document.querySelectorAll("input[data-validation]");

	let firstError = 0;

	submitState = 0;
	hasError = 0;

	const selectElement = document.getElementById("salutation");
	const dropdowninputField = document.getElementById("salutation");
	const dropdownformField = document.querySelector(".form-field");
	const dropdownerrorMessage = document.getElementById("salutation-error");

	// Add event listener for 'change' event
	// Get the selected value
	const selectedValue = selectElement.value;

	// Perform an action based on the selected value
	if (selectedValue !== "Default") {
		selectElement.classList.add("selected");

		dropdownerrorMessage.textContent = "";
		dropdownerrorMessage.classList.remove("error-message-show");
		dropdowninputField.classList.remove("error");
		dropdownformField.classList.remove("error-field");
	} else {
		selectElement.classList.remove("selected");

		dropdownerrorMessage.textContent = "Please select an option above";
		dropdownerrorMessage.classList.add("error-message-show");
		dropdowninputField.classList.add("error");
		dropdownformField.classList.add("error-field");

		if (firstError === 0) {
			if (viewportWidth <= 768) {
				mobileState = 1;
				updateState(1);
			}

			selectElement.focus();
			firstError = 1;
		}

		hasError = 1;
	}

	// Iterate through the form fields
	formFields.forEach((field) => {
		const inputId = field.id;
		const dataValidation = field.getAttribute("data-validation");
		let validateField = 0;

		if (dataValidation.includes("flow-c") && flowState === 1) {
			validateField = 1;
		} else if (dataValidation.includes("flow-d") && flowState === 3) {
			validateField = 1;
		} else if (dataValidation.includes("flow-b") && flowState === 2) {
			validateField = 1;
		} else if (dataValidation.includes("flow-a") && (flowState === 1 || flowState === 3 || flowState === 4)) {
			validateField = 1;
		} else if (dataValidation.includes("flow-e") && checkState === 1) {
			validateField = 1;
		} else if (dataValidation.includes("flow-f") && radioState === 2) {
			validateField = 1;
		} else if (dataValidation.includes("flow-g")) {
			validateField = 1;
		} else {
			validateField = 0;
		}

		if (validateField === 1) {
			validateFormField(inputId);

			if (firstError === 0 && hasError === 1) {
				if (viewportWidth <= 768) {
					if (dataValidation.includes("step-1")) {
						mobileState = 1;
						updateState(1);
					} else if (dataValidation.includes("step-2")) {
						mobileState = 2;
						updateState(2);
					} else if (dataValidation.includes("step-3")) {
						mobileState = 3;
						updateState(3);
					} else if (dataValidation.includes("step-4")) {
						mobileState = 4;
						updateState(4);
					} else {
						console.log("Focus no step set");
					}
				}

				let inputField = document.getElementById(inputId);
				inputField.focus();
				firstError = 1;
			}
		}
	});

	if (flowState === 1 || flowState === 3 || flowState === 4) {
		// Get the radio buttons
		const radioButtons = document.getElementsByName("nationalprogrammeradio");

		// Function to check if any radio button is selected
		function isRadioButtonSelected() {
			for (let i = 0; i < radioButtons.length; i++) {
				if (radioButtons[i].checked) {
					return true;
				}
			}
			return false;
		}

		var errorMessage = document.getElementById("nationalprogrammeradio-error");

		// Example usage
		if (isRadioButtonSelected()) {
			// At least one radio button is selected
			console.log("A radio button is selected.");
			errorMessage.textContent = "";
			errorMessage.classList.remove("error-message-show");
		} else {
			// No radio button is selected
			errorMessage.textContent = "Please select an option above";
			errorMessage.classList.add("error-message-show");

			if (firstError === 0) {
				if (viewportWidth <= 768) {
					mobileState = 3;
					updateState(3);
				}

				let inputField = document.getElementById("nationalprogrammeradio1");
				inputField.focus();
				firstError = 1;
			}

			hasError = 1;
		}

		// Get all the checkboxes
		const checkboxes = document.querySelectorAll(".checkbox-researchdomain input[type='checkbox']");

		// Function to check if at least one checkbox is selected
		function isCheckboxSelected() {
			for (let i = 0; i < checkboxes.length; i++) {
				if (checkboxes[i].checked) {
					return true;
				}
			}
			return false;
		}

		var errorMessage = document.getElementById("researchdomaincheckbox-error");

		// Example usage
		if (isCheckboxSelected()) {
			// At least one checkbox is selected
			errorMessage.textContent = "";
			errorMessage.classList.remove("error-message-show");
		} else {
			// No checkbox is selected
			errorMessage.textContent = "Please select an option above";
			errorMessage.classList.add("error-message-show");

			if (firstError === 0) {
				if (viewportWidth <= 768) {
					mobileState = 3;
					updateState(3);
				}

				let inputField = document.getElementById("researchdomain1");
				inputField.focus();
				firstError = 1;
			}

			hasError = 1;
		}
	}

	if (hasError === 0) {
		// Get the modal element
		const modal = document.getElementById("exampleModal");

		// Create a Bootstrap modal instance
		const modalInstance = new bootstrap.Modal(modal);

		// Open the modal
		modalInstance.show();
	}
}

/*
// Unused Recaptcha Validation (does not work)

// Example usage
const recaptchaError = document.getElementById("recaptcha-error");

// Function to validate the reCAPTCHA
const recaptchaResponse = grecaptcha.getResponse();

if (recaptchaResponse !== "") {
	// reCAPTCHA was successful
	recaptchaError.textContent = "";
	recaptchaError.classList.remove("error-message-show");

	// You can proceed with your form submission or any other action
	console.log("reCAPTCHA was successful");
} else {
	// reCAPTCHA was not successful
	recaptchaError.textContent = "Please complete the reCAPTCHA";
	recaptchaError.classList.add("error-message-show");

	console.log("reCAPTCHA was not successful");

	hasError = 1;
}
*/

const selectElement = document.getElementById("salutation");

// Add event listener for 'change' event
selectElement.addEventListener("change", changedropdown);
selectElement.addEventListener("blur", validatedropdown);

function changedropdown() {
	// Get the selected value
	const selectedValue = selectElement.value;

	// Perform an action based on the selected value
	if (selectedValue != "Default") {
		selectElement.classList.add("selected");
	} else {
		selectElement.classList.remove("selected");
	}
	// You can add your code here to handle the change event
}

function validatedropdown() {
	const selectElement = document.getElementById("salutation");
	const dropdowninputField = document.getElementById("salutation");
	const dropdownformField = document.querySelector(".form-field");
	const dropdownerrorMessage = document.getElementById("salutation-error");

	// Add event listener for 'change' event
	// Get the selected value
	const selectedValue = selectElement.value;

	// Perform an action based on the selected value
	if (selectedValue !== "Default") {
		selectElement.classList.add("selected");

		dropdownerrorMessage.textContent = "";
		dropdownerrorMessage.classList.remove("error-message-show");
		dropdowninputField.classList.remove("error");
		dropdownformField.classList.remove("error-field");
	} else {
		selectElement.classList.remove("selected");

		dropdownerrorMessage.textContent = "Please select an option above";
		dropdownerrorMessage.classList.add("error-message-show");
		dropdowninputField.classList.add("error");
		dropdownformField.classList.add("error-field");
	}
}
