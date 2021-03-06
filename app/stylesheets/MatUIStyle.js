import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { cyan900, brown300, darkWhite, darkBlack, cyan500 } from 'material-ui/styles/colors'
import typography from 'material-ui/styles/typography'

export const dialogStyle = {
  width: '100%',
  maxWidth: 'none',
  height: '100%',
  maxHeight: 'none'
}

// app theme for MuiThemeProvider to user
const Style = getMuiTheme({
  ...darkBaseTheme,
  fontFamily: 'Raleway, sans-serif',
  palette: {
    primary1Color: cyan900,
    primary2Color: brown300,
    primary3Color: darkWhite,
    textColor: darkBlack,
    pickerHeaderColor: cyan500,
  },
  appBar: {
    titleFontWeight: typography.fontWeightLight
  },
  card: {
    fontWeight: typography.fontWeightLight
  }
})

const MatUIStyle = (props) => {
  const {children} = props
  return (
    <MuiThemeProvider muiTheme={Style}>
      {children}
    </MuiThemeProvider>
  )
}

export default MatUIStyle
