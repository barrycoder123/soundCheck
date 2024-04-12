/**
* @file theme.js
* @description Implements theme for SoundCheck
* @author Ben Skinner
*/

import React from 'react'

import * as constants from './style-constants'

// Declare the theme values here
const theme = {
    /**
    * colors:
    * content: white
    * action: red
    * primary: black
    * secondary: dark grey
    * tertiary: medium grey
    * spotify: green
    * 
    * If you want to add a new color, add it to style-constants.js and
    * import it here with a semantic name
    */
    colors: {
        action: constants.colors.red, // red
        primary: constants.colors.white, // white
        secondary: constants.colors.lightGrey, // light grey
        tertiary: constants.colors.medGrey, // medium grey
        quadernary: constants.colors.darkGrey, // dark grey
        spotify: constants.colors.green, // green
        background: constants.colors.black // black

    },
    /**
    * textVariants:
    * s: 12px
    * m: 16px
    * l: 20px
    * xl: 36px
    */
    textVariants: {
        s: {
            ...constants.textVariants.s
        },
        m: {
            ...constants.textVariants.m
        },
        l: {
            ...constants.textVariants.l
        },
        xl: {
            ...constants.textVariants.xl
        }
    },
    /**
    * spacing:
    * Pick one of these to use as a margin or padding value,
    * example: margin: theme.spacing.m
    * if they don't work for you, add a new one or, less optimally,
    * multiply by a constant
    * ex: margin: 2 * theme.spacing.m
    */
    spacing: {
        ...constants.spacing // xs, s, m, l, xl
    }
}

// Create the context which can be imported where needed
export const ThemeContext = React.createContext(theme)

// Used to wrap the app in the theme provider
const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider
            value={theme}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider



