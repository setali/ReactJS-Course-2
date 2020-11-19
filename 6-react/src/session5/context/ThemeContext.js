import React from 'react'


export const themes = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}

const ThemeContext = React.createContext()

export default ThemeContext