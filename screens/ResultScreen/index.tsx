import React from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';
import { calculateRecommendation } from '../../model/restaurant';
import { APP_STRINGS, COLORS } from '../../utils/constants';
import RestaurantBackground from '../../assets/result_background.jpg';

// ResultScreenProps is the type of the props object that is passed to ResultScreen component.
type ResultScreenProps = {
  navigation: any,
  route: any
}

// ResultScreen component renders the result of the quiz and a button to restart the quiz.
// It also handles the navigation to the HomeScreen component when the user presses the restart button.
// The recommendation is calculated based on the total points the user has scored.
const ResultScreen = ({ route, navigation }: ResultScreenProps) => {
  const { totalPoints } = route.params;

  const handleRestartPress = () => {
    navigation.popToTop();
  };

  return (
    <ImageBackground style={styles.container} source={RestaurantBackground} >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{APP_STRINGS.result_title}</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{APP_STRINGS.result_subtitle}</Text>
          <Text style={styles.resultName}>{calculateRecommendation(totalPoints)}</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? COLORS.button_pressed : COLORS.button_unpressed,
              transform: [{ scale: pressed ? 0.95 : 1 }]
            }
          ]}
          onPress={handleRestartPress}
        >
          <Text style={styles.buttonText}>{APP_STRINGS.restart_button}</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add a semi-transparent dark overlay
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.button_text,
    marginBottom: 20,
  },
  resultContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    color: COLORS.button_text,
    textAlign: 'center',
    marginBottom: 10,
  },
  resultName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.result_text,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: COLORS.button_text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
