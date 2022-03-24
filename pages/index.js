import Head from "next/head";
import Form from "../components/form";
import * as S from "../styles/styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lennas MP3</title>
        <meta name="description" content="Conveter musicas do youtube para mp3" />
      </Head>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Logo>
            <S.LogoName>LennaYT</S.LogoName>
          </S.Logo>
          <Form />
        </S.Container>
        <S.GithubLink><a href='https://github.com/andersondavid'>David SF</a></S.GithubLink>

      </S.Wrapper>
    </>
  );
}
