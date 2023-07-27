const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const apiKey = 'AIzaSyAHmmWWaYstEqjHgHTvdifz2AKih5YbMpw'; // Replace with your actual API key
const searchEngineId = '11cff064712ac4ff2'; // Replace with your actual Search Engine ID

// Array of personality quotes
const personalityQuotes = [
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

// Function to display user message in the chatbox
function displayUserMessage(message) {
  const userMessage = document.createElement('div');
  userMessage.classList.add('message');
  userMessage.innerHTML = `<strong>You:</strong> ${message}`;
  chatbox.appendChild(userMessage);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to display bot message in the chatbox
function displayBotMessage(message) {
  const botMessage = document.createElement('div');
  botMessage.classList.add('message');
  botMessage.innerHTML = `<strong>MaterialNet:</strong> ${message}`;
  chatbox.appendChild(botMessage);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to handle user input and generate bot response
function handleUserInput() {
  const message = userInput.value;
  displayUserMessage(message);

  const lowercaseMessage = message.toLowerCase();

  if (lowercaseMessage.includes('hi') || lowercaseMessage.includes('hello')) {
    displayBotMessage('Hello!');
  } else if (lowercaseMessage.includes('how are you')) {
    displayBotMessage('I am a chatbot. I do not have feelings, but thank you for asking!');
  } else if (lowercaseMessage.includes('your name')) {
    displayBotMessage('I am MaterialNet. Nice to meet you!');
  } else if (lowercaseMessage.includes('thank you') || lowercaseMessage.includes('thanks')) {
    displayBotMessage("You're welcome!");
  } else if (lowercaseMessage.includes('bye')) {
    displayBotMessage('Goodbye! Have a great day!');
  } else if (lowercaseMessage.includes('tell me a joke')) {
    displayJoke();
  } else if (lowercaseMessage.includes('time')) {
    displayCurrentTime();
  } else {
    // Perform search and display results
    searchGoogle(message);
  }

  // Clear user input field
  userInput.value = '';
}

// Function to search Google using Custom Search API
function searchGoogle(query) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const searchResults = data.items;

      if (searchResults && searchResults.length > 0) {
        displaySearchResults(searchResults);
      } else {
        const response = "I'm sorry, I couldn't find any relevant results for your question.";
        displayBotMessage(response);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      const response = "I'm sorry, an error occurred while fetching the search results.";
      displayBotMessage(response);
    });
}

// Function to display search results in the chatbox
function displaySearchResults(results) {
  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('search-result');

  results.forEach(result => {
    const resultElement = document.createElement('div');
    const titleElement = document.createElement('a');
    const snippetElement = document.createElement('p');

    titleElement.textContent = result.title;
    titleElement.href = result.link;
    titleElement.target = '_blank';
    snippetElement.textContent = result.snippet;

    resultElement.appendChild(titleElement);
    resultElement.appendChild(snippetElement);
    resultsContainer.appendChild(resultElement);
  });

  chatbox.appendChild(resultsContainer);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to display a random joke
function displayJoke() {
  const jokes = [
    'Why dont scientists trust atoms? Because they make up everything!',
    'Did you hear about the mathematician whos afraid of negative numbers? He will stop at nothing to avoid them!',
    'Why dont skeletons fight each other? They dont have the guts!',
    'I used to be a baker, but I couldnt make enough dough.',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'Im reading a book about anti-gravity. Its impossible to put down!',
  ];

  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  displayBotMessage(joke);
}

// Function to display the current time
function displayCurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
  displayBotMessage(`The current time is ${time}.`);
}

// Event listener for send button click
sendBtn.addEventListener('click', handleUserInput);

// Event listener for enter key press in the user input field
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleUserInput();
  }
});

// Display initial bot message with a random personality quote
const randomIndex = Math.floor(Math.random() * personalityQuotes.length);
const initialQuote = personalityQuotes[randomIndex];
displayBotMessage(initialQuote);
