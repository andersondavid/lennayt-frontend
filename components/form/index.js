import { useState, useEffect } from "react"
import io from "socket.io-client"
import Loading from "../loading"
import * as S from "./styles"
let socket
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
// {
//   status: 'complete',
//   videoTitle: 'Major Lazer – Light it Up Remix (feat. Nyla & Fuse ODG) (Music Video) by Method Studios',
//   storageURL: 'https://firebasestorage.googleapis.com/v0/b/lennat…=media&token=43803857-f785-4f3e-8a41-6a8618e9a95a'
// }

const Form = () => {
	const [inputUrl, setInputUrl] = useState()
	const [convertBtnText, setConvertBtnText] = useState({
		text: "Converter",
		enable: false,
	})
	const [convertStatus, setConvertStatus] = useState({
		status: "",
		storageURL: "",
		videoTitle: "",
	})
	const [nameVideoState, setNameVideoState] = useState(false)

	useEffect(() => {
		fetch(`${BASE_URL}/start`)
			.then((res) => console.log(res))
			.then(() => {
				socket = io(`${BASE_URL}`)

				socket.on("connect", () => {
					console.log("connect")
				})

				socket.on("conn", () => {
					console.log("Conexao socket estabelecida")
				})

				socket.on("convert", (data) => {
					console.log(data)
					data.videoName ? setNameVideoState(data.videoName) : null
					setConvertStatus(data)
					if (data.status == "complete") {
						setConvertBtnText({ text: "Converter outra", enable: false })
					}
				})

				socket.on("disconnect", () => {
					console.log("disconnect")
				})
			})
	}, [])

	const matchYoutubeUrl = (url) => {
		var p =
			/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
		if (url.match(p)) {
			return url.match(p)[1]
		}
		return false
	}
	const handleSubmit = () => {
		let validadeUrl = matchYoutubeUrl(inputUrl)

		if (validadeUrl) {
			setConvertBtnText({ text: "Convertendo", enable: true })
			socket.emit("videourl", {
				yturl: validadeUrl,
			})
		} else {
      alert('O link está incorreto.')
    }
	}

	return (
		<S.FormContainer>
			<S.VideoName>{nameVideoState}</S.VideoName>
			<S.InputText
				type="text"
				id="first"
				name="yturl"
				required
				placeholder=" http://youtube.com/..."
				onChange={(e) => setInputUrl(e.target.value)}
			/>
			<S.BtnsContainer>
				<S.ButtonSubmit
					type="submit"
					onClick={() => handleSubmit()}
					disabled={convertBtnText.enable}
				>
					{convertBtnText.text}
				</S.ButtonSubmit>
				<S.DownloadArea showUrlButton={convertStatus.status}>
					<a href={convertStatus.storageURL} target="_blank">
						<S.ButtonDownload type="submit">Baixar</S.ButtonDownload>
					</a>
					<Loading status={convertStatus.status} />
				</S.DownloadArea>
			</S.BtnsContainer>
		</S.FormContainer>
	)
}

export default Form
