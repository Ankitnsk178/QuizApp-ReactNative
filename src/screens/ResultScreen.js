import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import Button from '../components/Button';

const ResultScreen = ({ route, navigation }) => {
    const { results, totalQuestions } = route.params;
    const correctAnswers = results.filter(result => result.isCorrect).length;

    const renderResultItem = ({ item }) => (
        <View style={styles.resultItemContainer}>
            <Text style={styles.resultQuestionText}>{item.question}</Text>
            <Text style={item.isCorrect ? styles.correctText : styles.incorrectText}>
                {item.isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </Text>
            <Text>Your Answer: {item.userAnswer}</Text>
            <Text>Correct Answer: {item.correctAnswer}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.resultTitleText}>Quiz Results</Text>
            <Text style={styles.scoreText}>
                Score: {correctAnswers} / {totalQuestions}
            </Text>

            <FlatList
                data={results}
                renderItem={renderResultItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.resultsList}
            />

            <Button
                title="Back to Quiz List"
                onPress={() => navigation.navigate('QuizList')}
                style={styles.restartButton}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        padding: 20,
    },
    resultTitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scoreText: {
        fontSize: 20,
        marginBottom: 20,
    },
    resultsList: {
        width: '100%',
        marginBottom: 20,
    },
    resultItemContainer: {
        backgroundColor: '#F0F0F0',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
    },
    resultQuestionText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    correctText: {
        color: 'green',
        marginBottom: 5,
    },
    incorrectText: {
        color: 'red',
        marginBottom: 5,
    },
    restartButton: {
        marginTop: 10,
    },
});

export default ResultScreen;