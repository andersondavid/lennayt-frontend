import { ThemeProvider } from "styled-components"

const theme = {
  color: {
    primary: '#FF4500',
    secondary: '#00e5ff',
    white: '#fdfdfd',
    background: 'linear-gradient(-45deg, #e96443, #904e95)'
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
