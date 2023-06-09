# Restaurant Recommendation Quiz App
 This is a mobile application that presents users with a quiz comprising six questions. Based on the user's answers, the application calculates the total points and recommends a restaurant from a predefined list. The application is designed for mobile devices and has been thoroughly tested for stress cases.This is my submission to Mobile Developer Coding Challenge 2023 at Lettuce Entertain You .

## Screenshots


### 1.HomeScreen  
<div align="center">
  <img src="https://github.com/hrishiakhade/lettuce_entertain_you_challenge/assets/20705523/c4b3c3de-753b-4c7d-8f0e-53ed84610974" alt="Screenshot 1" width="200"/>
  <img src="https://github.com/hrishiakhade/lettuce_entertain_you_challenge/assets/20705523/ca88194d-1624-4f3a-9ab5-42e224dfbeb1" alt="Screenshot 2" width="200"/>
</div>

### Result Screen  
<div align="center">
  <img src="https://github.com/hrishiakhade/lettuce_entertain_you_challenge/assets/20705523/9ccdc705-0b4d-49cd-8f48-c15961be6471" alt="Screenshot 1" width="200"/>
</div>

## Features

- Interactive quiz with six questions
- Each answer is assigned a point value to track the user's choices
- Calculation of total points at the end of the quiz
- Restaurant recommendation based on the total points
- Mobile device compatibility

## Installation
**Instructions to run the App on Expo Go**

Follow the steps below to install and set up the application:

1. Git Clone the repository  
``` https://github.com/hrishiakhade/lettuce_entertain_you_challenge.git```  <br /><br />
2. Go inside the directory and install node modules  
``` cd lettuce_entertain_you_challenge\BiteBuddy ```  
``` npm install ```    <br /><br />
3. After node modules are installed , run the following command  
``` npm start ```  <br /><br />
4. Above command will display the QR code on the command line   <br /><br />
    A. If you are using Android , you need to install Expo Go App from playstore and scan the QR code to run the app  <br /><br />
    B. If you are using iOS , you need to install Expo Go from Apple Store and Open the phone's camera to scan the QR code , it will redirect you to Expo Go and load the React Native App. 

## Usage

To use the application, follow these instructions:

1. Launch the application on your mobile device.
2. Start the quiz and answer each question by selecting one of the provided options.
3. Upon completing the quiz, the application will calculate the total points based on your answers.
4. The recommended restaurant will be displayed based on the total points obtained.
5. You can reset the quiz and retake it if desired.
    
## Instructions to test the app<br />
The application has been thoroughly tested for stress cases using a combination of manual testing and Jest for test-driven development. Unit tests have been implemented to ensure the correctness and reliability of the application's core functionality.
To run the tests, use the following command:
We are using Jest to test the React Native Application . Assuming you have already installed the required libraries (follow Step 2 from above )  

1. Go inside the directory   
``` cd lettuce_entertain_you_challenge\BiteBuddy ```  
2. Run the following command  
``` npm test ```



## NOTE : Jest Testing with Expo Go and TypeScript

During the development of this project, I had the opportunity to work with Jest for the first time. Although it was a valuable learning experience, I encountered various challenges and made mistakes along the way.

One of the major challenges I faced was configuring Jest to work seamlessly with Expo Go and TypeScript. Despite investing significant time and effort in troubleshooting and seeking help from the React Native community on platforms like Discord and LinkedIn, I encountered parsing errors and difficulties in handling non-standard JavaScript syntax.

While the Jest test cases were passing, the parsing issues persisted. In order to continue with the project and ensure smooth testing, I made the decision to migrate the codebase from TypeScript to JavaScript. This migration resolved the parsing errors and allowed Jest to function correctly without any further issues.  Here's the link to JS codebase : <a>https://github.com/hrishiakhade/lettuce_entertain_you_challenge</a>

I want to emphasize that this experience taught me a great deal about Jest, testing frameworks, and the importance of proper configuration. I gained valuable insights from my mistakes and actively sought guidance from experienced developers. Although it presented challenges, I appreciate the opportunity to expand my knowledge and improve my skills in testing with Jest.
