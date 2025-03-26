import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  BackHandler,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';
import Button from '../components/Button';

const { height } = Dimensions.get('window');

const QuizScreen = ({ route, navigation }) => {
  const { quiz } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState([]);

  
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true
    );

    return () => backHandler.remove();
  }, []);

  const handleOptionSelect = (option) => {
    if (!isChecked) {
      setSelectedOption(option);
    }
  };

  const checkAnswer = () => {
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    
    setResults([...results, {
      question: currentQuestion.question,
      userAnswer: selectedOption,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: isCorrect
    }]);

    setIsChecked(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsChecked(false);
    } else {
      
      navigation.replace('ResultScreen', { 
        results: results, 
        totalQuestions: quiz.questions.length 
      });
    }
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const getOptionStyle = (option) => {
    if (!isChecked) {
      return option === selectedOption 
        ? styles.selectedOption 
        : styles.unselectedOption;
    }

    if (option === currentQuestion.correctAnswer) {
      return styles.correctOption;
    }

    if (option === selectedOption && option !== currentQuestion.correctAnswer) {
      return styles.incorrectOption;
    }

    return styles.unselectedOption;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.headerContainer}>
        <Text style={styles.quizTitle}>{quiz.title}</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.questionContainer}>
            <Text style={styles.questionNumber}>
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </Text>
          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.optionButton, getOptionStyle(option)]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {!isChecked ? (
          <Button 
            title="Check Answer"
            onPress={checkAnswer}
            disabled={!selectedOption}
          />
        ) : (
          <Button 
            title={currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish'}
            onPress={nextQuestion}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
  headerContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  quizTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  questionNumber: {
    fontSize: 16,
    color: 'gray',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  unselectedOption: {
    backgroundColor: '#E0E0E0',
  },
  selectedOption: {
    backgroundColor: '#2196F3',
  },
  correctOption: {
    backgroundColor: '#4CAF50',
  },
  incorrectOption: {
    backgroundColor: '#F44336',
  },
  optionText: {
    fontSize: 16,
  },
  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default QuizScreen;