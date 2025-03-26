# QuizApp Mobile Application (React-Native)


<br>
<h2>Dependencies</h2>

<h5> Install npm modules </h5>

```
npm install
```

<h5> Install React Navigation </h5>

```
npm install @react-navigation/native @react-navigation/stack
```

<h5> Install peer dependencies </h5>

```
npm install react-native-screens react-native-safe-area-context
```
<br>
<h2>Project Structure</h2>

```
QuizApp/
│
├── src/
|   |__ components/
|   |   |
|   |   |__ Button.js
|   |   
│   ├── screens/
│   │   ├── QuizListScreen.js
│   │   ├── QuizScreen.js
│   │   └── ResultScreen.js
│   │
│   └── data/
│       └── quizData.js
│
├── App.js
└── package.json
```

<br>
<h2>For Starting the Project</h2>

```
# Start the development server
expo start

# Run on Android
expo start --android

# Run on iOS
expo start --ios
```