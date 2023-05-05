// Define variables for all elements
const startContent = document.getElementById("start-content")
const formContent = document.getElementById("form-content")
const progressBar = document.getElementById("progress-bar")
const step1 = document.getElementById("step-1")
const step2 = document.getElementById("step-2")
const step3 = document.getElementById("step-3")
const step4 = document.getElementById("step-4")
const continue0Btn = document.getElementById("continue0")
const continue1Btn = document.getElementById("continue1")
const continue2Btn = document.getElementById("continue2")
const continue3Btn = document.getElementById("continue3")
const back1Btn = document.getElementById("back1")
const back2Btn = document.getElementById("back2")
const back3Btn = document.getElementById("back3")

let currentState = 0 // Initialize current state to state 0
let mobileState = 0 // Initialize current state to state 0

function updateState(currentState) {
	// Add event listeners for each button to change the state accordingly
	if (currentState === 0) {
		startContent.style.display = "flex"
		formContent.style.display = "none"
	}

	if (currentState === 1) {
		startContent.style.display = "none"
		formContent.style.display = "flex"
		progressBar.style.display = "flex"
		step1.style.display = "flex"
		step2.style.display = "none"
		step3.style.display = "none"
		step4.style.display = "none"
		setProgressState(1)
	}

	if (currentState === 2) {
		startContent.style.display = "none"
		formContent.style.display = "flex"
		progressBar.style.display = "flex"
		step1.style.display = "none"
		step2.style.display = "flex"
		step3.style.display = "none"
		step4.style.display = "none"
		setProgressState(2)
	}

	if (currentState === 3) {
		startContent.style.display = "none"
		formContent.style.display = "flex"
		progressBar.style.display = "flex"
		step1.style.display = "none"
		step2.style.display = "none"
		step3.style.display = "flex"
		step4.style.display = "none"
		setProgressState(3)
	}

	if (currentState === 4) {
		startContent.style.display = "none"
		formContent.style.display = "flex"
		progressBar.style.display = "flex"
		step1.style.display = "none"
		step2.style.display = "none"
		step3.style.display = "none"
		step4.style.display = "flex"
		setProgressState(4)
	}

	if (currentState === 5) {
		startContent.style.display = "none"
		formContent.style.display = "flex"
		progressBar.style.display = "flex"
		step1.style.display = "flex"
		step2.style.display = "flex"
		step3.style.display = "flex"
		step4.style.display = "flex"
	}

	if (currentState === 6) {
		startContent.style.display = "flex"
		formContent.style.display = "flex"
		progressBar.style.display = "flex"
		step1.style.display = "flex"
		step2.style.display = "flex"
		step3.style.display = "flex"
		step4.style.display = "flex"
	}
}

// Get the viewport width at page load
var viewportWidth = window.innerWidth || document.documentElement.clientWidth

// set viewport on load

if (viewportWidth > 992) {
	updateState(6)
} else {
	updateState(0)
}

// state management

continue0Btn.addEventListener("click", function () {
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth
	mobileState = 1
	if (viewportWidth > 768) {
		updateState(5)
	} else {
		updateState(1)
	}
})

continue1Btn.addEventListener("click", function () {
	mobileState = 2
	updateState(2)
})
continue2Btn.addEventListener("click", function () {
	mobileState = 3
	updateState(3)
})
continue3Btn.addEventListener("click", function () {
	mobileState = 4
	updateState(4)
})

back1Btn.addEventListener("click", function () {
	mobileState = 1
	updateState(1)
})

back2Btn.addEventListener("click", function () {
	mobileState = 2
	updateState(2)
})

back3Btn.addEventListener("click", function () {
	mobileState = 3
	updateState(3)
})

// Add event listener to check viewport size on resize
window.addEventListener("resize", function () {
	// Get the updated viewport width
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth

	// If viewport width is greater than 1024px (laptop size)
	if (viewportWidth > 992) {
		// Show the element with ID "start-content"
		updateState(6)
	} else if (viewportWidth > 768) {
		if (mobileState === 0) {
			updateState(0)
		} else {
			updateState(5)
		}
	} else {
		// Hide the element with ID "start-content"
		updateState(mobileState)
	}
})

// progress bar

// Store the progress elements in an array
const progressElems = [document.getElementById("dot-1"), document.getElementById("progress-line-1"), document.getElementById("dot-2"), document.getElementById("progress-line-2"), document.getElementById("dot-3"), document.getElementById("progress-line-3"), document.getElementById("dot-4")]

// Set the initial state of the progress bar
setProgressState(1)

function setProgressState(state) {
	// Loop through each progress element and update its color
	for (let i = 0; i < progressElems.length; i++) {
		// If state 1 is selected, change dot1 to red, and everything else to gray
		if (state === 1) {
			if (i === 0) {
				progressElems[i].classList.add("dot-red")
			} else {
				progressElems[i].classList.remove("dot-red")
			}
			removeProgressBar(1)
			removeProgressBar(2)
			removeProgressBar(3)
		}
		// If state 2 is selected, change dot1, line1, and dot2 to red, and everything else to gray
		if (state === 2) {
			if (i === 0 || i === 1 || i === 2) {
				progressElems[i].classList.add("dot-red")
			} else {
				progressElems[i].classList.remove("dot-red")
			}
			startProgressBar(1)
			removeProgressBar(2)
			removeProgressBar(3)
		}
		// If state 3 is selected, change dot1, line1, dot2, and line2 to red, and everything else to gray
		if (state === 3) {
			if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) {
				progressElems[i].classList.add("dot-red")
			} else {
				progressElems[i].classList.remove("dot-red")
			}
			setProgressBar(1)
			startProgressBar(2)
			removeProgressBar(3)
		}
		// If state 4 is selected, change everything to red
		if (state === 4) {
			progressElems[i].classList.add("dot-red")
			if (i % 2 === 1) {
			}
			setProgressBar(1)
			setProgressBar(2)
			startProgressBar(3)
		}
	}
}

// Example usage: set the progress bar to state 3
setProgressState(1)

const dot1 = document.getElementById("dot-1")

dot1.addEventListener("click", () => {
	mobileState = 1
	updateState(1)
})
const dot2 = document.getElementById("dot-2")

dot2.addEventListener("click", () => {
	mobileState = 2
	updateState(2)
})
const dot3 = document.getElementById("dot-3")

dot3.addEventListener("click", () => {
	mobileState = 3
	updateState(3)
})
const dot4 = document.getElementById("dot-4")

dot4.addEventListener("click", () => {
	mobileState = 4
	updateState(4)
})

function startProgressBar(bar) {
	// Get the progress bar element
	const progressBar1 = document.getElementById("progress-line-one")
	const progressBar2 = document.getElementById("progress-line-two")
	const progressBar3 = document.getElementById("progress-line-three")

	// Set the initial width to 0%
	let width = 0
	let savedMobileState = mobileState

	// Define the interval time in milliseconds
	const intervalTime = 2

	// Define the increment value for each interval
	const increment = 1

	// Set an interval to update the progress bar
	const interval = setInterval(function () {
		// Increment the width by the increment value
		width += increment
		// Set the width of the progress bar element
		if (bar === 1) {
			progressBar1.style.width = width + "%"
		}
		if (bar === 2) {
			progressBar2.style.width = width + "%"
		}
		if (bar === 3) {
			progressBar3.style.width = width + "%"
		}

		// If the width is equal to or greater than 100%, stop the interval
		if (width >= 100) {
			clearInterval(interval)
		}

		if (savedMobileState > mobileState) {
			if (bar === 1) {
				progressBar1.style.width = 0 + "%"
			}
			if (bar === 2) {
				progressBar2.style.width = 0 + "%"
			}
			if (bar === 3) {
				progressBar3.style.width = 0 + "%"
			}
			return
		}

		if (savedMobileState < mobileState) {
			if (bar === 1) {
				progressBar1.style.width = 100 + "%"
			}
			if (bar === 2) {
				progressBar2.style.width = 100 + "%"
			}
			if (bar === 3) {
				progressBar3.style.width = 100 + "%"
			}
			return
		}
	}, intervalTime)
}

function removeProgressBar(bar) {
	// Get the progress bar element
	const progressBar1 = document.getElementById("progress-line-one")
	const progressBar2 = document.getElementById("progress-line-two")
	const progressBar3 = document.getElementById("progress-line-three")

	if (bar === 1) {
		progressBar1.style.width = 0 + "%"
	}
	if (bar === 2) {
		progressBar2.style.width = 0 + "%"
	}
	if (bar === 3) {
		progressBar3.style.width = 0 + "%"
	}
}
function setProgressBar(bar) {
	// Get the progress bar element
	const progressBar1 = document.getElementById("progress-line-one")
	const progressBar2 = document.getElementById("progress-line-two")
	const progressBar3 = document.getElementById("progress-line-three")

	if (bar === 1) {
		progressBar1.style.width = 100 + "%"
	}
	if (bar === 2) {
		progressBar2.style.width = 100 + "%"
	}
	if (bar === 3) {
		progressBar3.style.width = 100 + "%"
	}
}

var overlay = document.getElementById("overlay")
var submitButton = document.getElementById("submit-button")

// Show the overlay when the submit button is clicked
submitButton.addEventListener("click", function () {
	overlay.style.display = "block"
})

// Hide the overlay when the user clicks outside the white box
overlay.addEventListener("click", function (event) {
	if (event.target === overlay) {
		overlay.style.display = "none"
	}
})
