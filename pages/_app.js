import { ThemeProvider } from "styled-components"

const theme = {
  color: {
    primary: '#FF4500',
    secondary: '#00e5ff',
    white: '#fdfdfd',
    background: 'linear-gradient(-45deg,#fc466b,#3f5efb)'
  },
}



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
