import { useState } from 'react'
import * as S from './styles'

const Loading = (props) => {
  let loadingText = ''
  let loadingOpacity = false

  const statusText = {
    error: {
      emoji: '👎😭',
      text: 'Deu ruim, tente de novo'
    },
    start: {
      emoji: '✌️😎',
      text: 'Conversão iniciada'
    },
    end: {
      emoji: '✋🤨',
      text: 'Finalizando'
    },
    complete: {
      emoji: '🤝😁',
      text: 'Conversão concluida'
    }
  }
  if(props.status != '') {
    loadingOpacity = true
  }

  switch (props.status) {
    case 'error':
      console.log(props.status);
      loadingText = statusText.error
      break
    case 'start':
      loadingText = statusText.start
      break
    case 'end':
      loadingText = statusText.end
      break
    case 'complete':
      loadingText = statusText.complete
      break
    default:
      break
  }

  return (
    <S.LoadingContainer loadingOpacity={loadingOpacity} showBtn={props.showBtn}>
      <S.LoadingEmoji>{loadingText.emoji}</S.LoadingEmoji>
      <S.LoadingText>{loadingText.text}</S.LoadingText>
    </S.LoadingContainer>
  )
}

export default Loading