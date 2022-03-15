import { useState, useEffect } from "react";
import io from "socket.io-client";
import Loading from "../loading";
import * as S from "./styles";
let socket;

// {
//   status: 'complete',
//   videoTitle: 'Major Lazer – Light it Up Remix (feat. Nyla & Fuse ODG) (Music Video) by Method Studios',
//   storageURL: 'https://firebasestorage.googleapis.com/v0/b/lennat…=media&token=43803857-f785-4f3e-8a41-6a8618e9a95a'
// }

const Form = () => {
  const [inputUrl, setInputUrl] = useState();
  const [convertBtnText, setConvertBtnText] = useState({
    text: "Converter",
    enable: false,
  });
  const [convertStatus, setConvertStatus] = useState({
    status: "",
    storageURL: "",
    videoTitle: "",
  });

  useEffect(() => {
    fetch("https://lennayt-backend.herokuapp.com/start")
      .then((res) => console.log(res))
      .then(() => {
        socket = io("https://lennayt-backend.herokuapp.com/");

        socket.on("connect", () => {
          console.log("connect");
        });

        socket.on("conn", () => {
          console.log("Conexao socket estabelecida");
        });

        socket.on("convert", (data) => {
          console.log(data);
          setConvertStatus(data);
          if (data.status == "complete") {
            setConvertBtnText({ text: "Converter outra", enable: false });
          }
        });

        socket.on("disconnect", () => {
          console.log("disconnect");
        });
      });
  }, []);

  const handleSubmit = () => {
    setConvertBtnText({ text: "Convertendo", enable: true });
    socket.emit("videourl", {
      yturl: inputUrl,
    });
  };

  return (
    <S.FormContainer>
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
  );
};

export default Form;
