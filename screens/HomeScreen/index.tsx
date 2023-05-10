import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import BackgroundImage from '../../assets/pattern.jpg';
import { Cards } from '../../components/card';
import { Header } from '../../components/header';
import { APP_STRINGS } from '../../utils/constants';
import { quizQuestions } from '../../utils/data';


type HomeScreenProps = {
    navigation: any
}

// HomeScreen component is the main component of the app. It renders the Header component and the Cards component which renders the questions and the options.
// It also handles the navigation to the ResultScreen component when the user reaches the last question.

const HomeScreen = ({ navigation }: HomeScreenProps) => {        

    const [index, setIndex] = useState<number>(0);
    const [questionData, setQuestionData] = useState(quizQuestions);
    const [totalPoints, setTotalPoints] = useState<number>(0);


    const handleNext = (points?: number) => {
        if (points !== undefined) {
            setTotalPoints(totalPoints + points);
            if (index === questionData.length - 1) {
                navigation.navigate('ResultScreen', { totalPoints: (totalPoints + points) });
                setTotalPoints(0);
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <ImageBackground
                style={styles.imageContainer}
                source={BackgroundImage}>
                <View style={styles.imageContainer}>
                    <Header title={APP_STRINGS.title} subtitle={APP_STRINGS.subtitle} />
                    <Cards
                        questionData={questionData[index]}
                        isLastQuestion={index === questionData.length - 1}
                        handleNext={handleNext}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;