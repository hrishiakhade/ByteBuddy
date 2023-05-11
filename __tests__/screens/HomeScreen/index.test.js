import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../../screens/HomeScreen';
import { ImageBackground } from 'react-native';
import { Header } from '../../../components/header';
import { Cards } from '../../../components/card';

describe('HomeScreen', () => {
    test('HomeScreen renders correctly', () => {
        const navigation = { navigate: jest.fn() };

        const component = renderer.create(<HomeScreen navigation={navigation} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('ImageBackground renders correctly', () => {
        const component = renderer.create(
            <ImageBackground source={require('../../../assets/pattern.jpg')} style={{ flex: 1 }}>
            </ImageBackground>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Header renders correctly', () => {
        const component = renderer.create(
            <Header title="My App" subtitle="Welcome!" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


    test('Cards renders correctly', () => {
        const questionData = {
            question: 'Pick a Netflix show to binge watch',
            options: [
                { text: 'Stranger Things', points: 2 },
                { text: 'The Crown', points: 4 },
                { text: 'House of Cards', points: 1 },
                { text: 'Wednesday', points: 3 },
            ]
        };
        const isLastQuestion = false;
        const handleNext = jest.fn();

        const component = renderer.create(
            <Cards questionData={questionData} isLastQuestion={isLastQuestion} handleNext={handleNext} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // test('handleNext works correctly', () => {
    //     const navigationMock = {
    //       navigate: jest.fn(),
    //     };
    
    //     const component = renderer.create(<HomeScreen navigation={navigationMock} />);
    //     const instance = component.getInstance();
    
    //     // Call handleNext with points
    //     instance.handleNext(2);
    
    //     // Check if the totalPoints state is updated
    //     expect(instance.state.totalPoints).toBe(0);
    //   });


});
