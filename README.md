# MaterialNet Here We Go!
#### Video Demo:  <https://youtu.be/9Uw7ZpWlyVE>
#### Description:
In this AI-driven world, where ChatGPT and Bard have become commonplace, I found myself inspired to infuse my engineering major in materials science with the knowledge gained from CS50x course with the enchantment of AI,to create a ChatBox of my own, fusing the principles of materials science with the power of AI. This unique amalgamation allowed me to develop an innovative virtual assistant that not only responds to search queries but also taps into the vast realm of materials science knowledge. Now, at the tip of everyone's fingertips, my quirky creation seamlessly delivers answers, weaving together the wonders of AI and the intricacies of materials science, ultimately bringing a touch of technological marvel to the world.

#### Design of the Project
It all started with a simple idea – to create a chatbox akin to ChatGPT or Bard, but with a more streamlined approach and limited functionality. Swiftly, I laid the foundation of the project, establishing its core structure. However, I soon realized that the key to success lay in refining the chatbox's response methodology.

With determined enthusiasm, I delved into the intricate workings, ensuring that the chatbox seamlessly communicated with Google.com, sending search queries and retrieving results. Yet, I yearned for more.

That's when it struck me – an API would be the perfect solution! Envisioning a world where the chatbox itself could display the results, sparing users the hassle of being redirected to Google.com, I set my sights on implementing this cutting-edge feature. It was a daring leap forward, but it would undoubtedly unlock a new level of convenience and sophistication.

With each step, my creation evolved, becoming sweeter. The chatbox, once a mere concept, transformed into a charming and intelligent companion, providing users with a delightful and streamlined interaction. The fusion of curiosity, innovation, and a touch of whimsy birthed a truly exceptional chatbox experience that redefined what was possible.

#### Features Added

The ChatBox not only encompasses its initial search functionality but has also been infused with a delightful touch of interactivity. It can now engage in lively conversations and respond to various prompts, adding an extra layer of charm to the user experience.

When greeted with a cheerful "Hello" or asked "How are you?", the ChatBox warmly reciprocates the greeting, creating an engaging and personable interaction. It understands the importance of introductions and is more than willing to reveal its own name when asked.

Expressing gratitude becomes a delightful experience as well. When the user expresses thanks, the ChatBox responds with genuine appreciation, spreading positivity and ensuring a sense of satisfaction.

As the conversation draws to a close, bidding farewell is met with a fond "Bye" from the ChatBox, leaving users with a smile.

But there's more! The ChatBox has been blessed with a sense of humor and wit. When prompted for a joke, it doesn't hold back and shares a playful quip, inviting laughter and brightening up the exchange.

Additionally, timekeeping is a breeze with the ChatBox at your side. When asked for the time, it promptly displays the current time, ensuring that users stay informed and punctual.

With these interactive elements seamlessly integrated into its repertoire, the ChatBox becomes more than just a search tool—it becomes a lively and delightful companion, ready to engage, entertain, and assist users in their quest for information and enjoyment.

The Chatbox is also capable of displaying motivational quotes from various personalities, a touch added so that the user gets motivated by that and also feel more comfortable with the interface.

It handles instances when the user forgets to enter any prompt by displaying "I am sorry message" on the chat window.

#### Steps Followed To Get API KEY AND Search Engine ID
Visit the Google Developers Console: Go to the Google Developers Console website (https://console.developers.google.com/) and sign in with your Google account.

Create a new project: If you don't have a project already, create a new one by clicking on the "Select a project" dropdown menu at the top of the page and then clicking on the "+ New Project" button. Give your project a meaningful name.

Enable the Custom Search API: In the Google Developers Console, navigate to the Dashboard by clicking on the project name in the top-left corner. Then click on the "Enable APIs and Services" button. Search for "Custom Search API" and click on it. On the API page, click the "Enable" button to activate the Custom Search API for your project.

Set up credentials: After enabling the Custom Search API, go back to the Dashboard and click on the "Credentials" tab on the left-hand side. Then click on the "+ Create Credentials" button and select "API key" from the dropdown menu.

Configure search engine: Visit the Google Custom Search Engine (CSE) website (https://programmablesearchengine.google.com/about/) and click on the "Get Started" button. Follow the on-screen instructions to create a custom search engine.

Retrieve the Search Engine ID: Once you have created your custom search engine, go to the Control Panel for that search engine. Click on the "Setup" tab and then on the "Basics" sub-tab. Scroll down until you see the "Search engine ID" section. Your Search Engine ID will be displayed there.

#### Files Used
- Index.html - For foundation of the program containing the chatbot functionalities
- home.html - Homepage
- register.html - For registering the user
- reister.js - JavaScript file for implementing the registeration process and check
- results.html - Handles the search results sent from Google back to Chatbox
- script.js - Used to display Chatbox response and also take in user input
- style.css - CSS file used for styling

#### Improvements That Can Be Made
There are lots of room for improvement like we can add more interactivity and functionalities to the ChatBox.
We can also store the user's search history
Display not only pages but also YouTube videos and images
Add more complexity and dynamism to the Chatbox

#### Working
Open home.html -> Register Yourself -> Directed to Chatbox -> Type query and get the desired results back

![homepage](https://github.com/code50/125608791/assets/125608791/85950027-6958-4fbe-a0de-8fe575bcd305)
![main](https://github.com/code50/125608791/assets/125608791/ed013363-28ae-468e-8acb-3f4bed04bc20)
![main2](https://github.com/code50/125608791/assets/125608791/ca82aeb2-d161-4bbf-9dbf-12819a7f9daf)
![main3](https://github.com/code50/125608791/assets/125608791/fcc24246-4e87-43f8-8b39-3b0fbe2ccc57)
![registration](https://github.com/code50/125608791/assets/125608791/8a59a08c-4f36-42e3-b859-21bbe9a5340c)

Thank You CS50!
