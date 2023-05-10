
// This file contains all the constants used in the app like colors, font sizes, strings etc.

type ColorPalette = {
    primary: string,
    secondary: string,
    disabled: string,
    button_pressed: string,
    button_unpressed: string,
    result_text: string,
    button_text: string
}

export const COLORS: ColorPalette = {
    primary: '#262624',
    secondary: '#9DB2BE',
    disabled: '#ccc',
    button_pressed: '#0066cc',
    button_unpressed: '#0080ff',
    result_text: '#F6AE2D',
    button_text: '#fff',
};

type FontSizes = {
    small: number,
    medium: number,
    large: number
}

export const FONT_SIZES: FontSizes = {
    small: 12,
    medium: 19,
    large: 48,
};

type AppStrings = {
    app_name: string,
    title: string,
    subtitle: string,
    next_button: string,
    submit_button: string,
    restart_button: string,
    result_title: string,
    result_subtitle: string
}

export const APP_STRINGS: AppStrings = {
    app_name: 'BiteBuddy',
    title: 'QUIZ',
    subtitle: 'Take our soup quiz to\n find out what soup you\n should have for dinner.',
    next_button: 'Next Question',
    submit_button: 'Submit',
    restart_button: 'Restart Quiz',
    result_title: 'Your Restaurant Recommendation',
    result_subtitle: 'Based on your quiz answers, we recommend',
};
