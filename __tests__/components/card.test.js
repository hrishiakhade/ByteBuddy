import React from 'react';
import renderer from 'react-test-renderer';
import { Cards, getQuestionText, getButton } from '../../components/card';


//  react-native-paper components are not fully compatible with react-native-testing-library


describe('Cards component', () => {
  test('renders question and options correctly', () => {
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

  test('renders question text correctly', () => {
    const text = 'What is the first thing you reach for in the morning?';
    const questionText = getQuestionText(text);

    const component = renderer.create(questionText);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders next/submit button correctly', () => {
    const isLastQuestion = false;
    const handleNext = jest.fn();
    const setOption = jest.fn();
    const points = 3;

    const button = getButton(isLastQuestion, handleNext, setOption, points);

    const component = renderer.create(button);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  

});
