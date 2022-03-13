import { useState, useEffect } from 'react'
import io from 'socket.io-client'
let socket

const Form = (props) => {
	const [linkDL, setLinkDL] = useState('')
	const [titleAudio, setTitleAudio] = useState('')
	const [socketState, setSocketState] = useState()

	const handleSubmit = event => {
		event.preventDefault()
		socket.emit('videourl', {
			yturl: event.target.yturl.value,
		})
	}

	useEffect(() => {
		fetch('http://localhost:3001').finally(() => {
			socket = io('http://localhost:3001')

			socket.on('connect', () => {
				console.log('connect')
				setSocketState(socket)
			})

			socket.on('conn', data => {
				console.log('Conexao socket estabelecida')
			})

			socket.on('convert', data => {
				console.log(data)
				setLinkDL(data.storageURL)
				setTitleAudio(data.videoTitle + '.mp3')
			})

			socket.on('disconnect', () => {
				console.log('disconnect')
			})

		})
	}, [])


	const downloadBtn = () => {
		console.log('click')
		const xhr = new XMLHttpRequest()
		xhr.responseType = 'blob'
		xhr.onload = (event) => {
			//const blob = xhr.response;
		}
		xhr.open('GET', linkDL)
		xhr.send()
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" id="first" name="yturl" required />
				<button type="submit"> Submit </button>
			</form>
			{linkDL &&
				<div>
					<input type='text' onChange={event => setTitleAudio(event.target.value)} value={titleAudio} />
					<button onClick={downloadBtn}>Baixar</button> <a href={linkDL}
						download={titleAudio} > Baixar por aqui </a>
				</div>
			}
		</>
	)
}

export default Form