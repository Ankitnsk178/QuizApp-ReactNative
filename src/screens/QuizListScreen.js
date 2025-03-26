import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { QUIZZES } from '../data/quizData';

const QuizListScreen = ({ navigation }) => {
    const renderQuizItem = ({ item }) => (
        <TouchableOpacity
            style={styles.quizItem}
            onPress={() => navigation.navigate('QuizScreen', { quiz: item })}
        >
            <Text style={styles.quizItemText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Choose a Quiz</Text>
            <FlatList
                data={QUIZZES}
                renderItem={renderQuizItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
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
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    listContainer: {
        width: '90%',
    },
    quizItem: {
        backgroundColor: '#4CAF50',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    quizItemText: {
        color: 'white',
        fontSize: 18,
    },
});

export default QuizListScreen;