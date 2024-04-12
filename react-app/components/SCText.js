/**
* @file SCText.js
* @description The custom SoundCheck text component. Use this instead of Text for consistent styling.
* @author Ben Skinner
* @todo Apply the correct fontFamily
* @example <SCText size='xl'>Hello World</SCText>
*/

import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { ThemeContext } from '@theme'

/**
* @param {string} size - 's', 'm', 'l', 'xl' (default: 'm')
* @param {string} children - text to display
* @param {boolean} strong - whether or not to apply bold styling (default: false)
* @param {boolean} dark - whether or not to make text grey (default: false = white text)
* @param {object} style - additional styles to apply. This will always **override** the default styles
*/

const SCText = ({
    size = 'm',
    children,
    strong = false,
    dark = false,
    style,
}) => {

    const theme = useContext(ThemeContext)

    return (
        <Text
            style={[styles(theme, size, strong, dark).text, {...style}]}
        >{children}</Text>
    )
}

const styles = (theme, size, strong, dark) => StyleSheet.create({
    text: {
        ...theme.textVariants[size],
        fontWeight: strong ? 'bold' : 'normal',
        color: dark ? theme.colors.secondary : theme.colors.primary
    },
  })

export default SCText