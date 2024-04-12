/**
* This file contains all the style constants that are used in the app.
*/


/**
* These are the colors that are defined in the Figma file.
* I think I've added all the colors, but if you want to add a 
* new one, go ahead
*/
export const colors = {
    red: '#B90046',
    black: '#000000',
    green: '#1DB954',
    white: '#EFEFEF',
    lightGrey: '#979797',
    medGrey: '#696969',
    darkGrey: '#2F2F2F',
    lightBlack: '#1B1B1B'
}

/**
* These are arbitrary values that I've defined. Feel free to change them,
* but be aware that every page will be affected.
*/
export const spacing = {
    xs: 5,
    s: 8,
    m: 16,
    l: 20,
    xl: 40
}

/**
* These sizes are defined in the Figma file. There should be any
* need to change them or add new ones, but if you do, add them
* here and import them into theme.js
*/
export const textVariants = {
    s: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 43.5
    },
    m: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 43.5
    },
    l: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 43.5
    },
    xl: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 43.5
    },
}