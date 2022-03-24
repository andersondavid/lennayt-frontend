import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  display: block;
  width: 75%;
  margin: auto;
`;

export const VideoName = styled.p`
	color: white;
	font-size: 1.5em;
	text-align: center;
	margin-bottom: 30px
`

export const BtnsContainer = styled.div`
  position: relative;
`;

export const InputText = styled.input`
  padding: 10px 15px;

  background-color: ${(props) => props.theme.color.white};
  border-radius: 30px;
  border: none;
  font-size: 1.1em;
  outline: none;
  width: 100%;
`;

export const DownloadArea = styled.div`
  width: 100%;
  position: relative;
  transition: 1s;
  padding-top: ${(props) =>
    props.showUrlButton == "complete" ? "56px" : "0px"};
  padding-bottom: 10px;
`;

export const ButtonSubmit = styled.button`
  padding: 10px 15px;
  background: ${(props) => props.theme.color.background};
  border-radius: 30px;
  color: ${(props) => props.theme.color.white};
  border: none;
  height: 41px;
  font-size: 1.1em;
  outline: none;
  width: 100%;
  margin: 15px 0 0 0;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  font-weight: bold;
  &:disabled {
    background: linear-gradient(-45deg,#ad3049,#293da1);
    color: #ddddd;
  }
`;

export const ButtonDownload = styled(ButtonSubmit)`
  z-index: 0;
  position: relative;
  top: 0;
`;
