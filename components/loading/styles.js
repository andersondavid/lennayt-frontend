import styled from "styled-components";

export const LoadingContainer = styled.div`
  opacity: ${props => props.loadingOpacity ? '100%' : '0'};
  width: 100%;
  margin: 15px 0 0 0;
  transition: 05s;
  height: 70px;
	margin-bottom: 15px
`;

export const LoadingEmoji = styled.span`
  text-align: center;
  font-size: 2.5em;
  display: block;
`;

export const LoadingText = styled.span`
  text-align: center;
  margin: 5px;
  color: ${(props) => props.theme.color.white};
  font-size: 1.4em;
  display: block;
`;
