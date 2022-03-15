## LennaYT

Site para converter e baixar os videos do youtube em formato MP3

### - _Frontend_

Esse frontend faz uma requisião ao backend para iniciar uma WebSocket, apos a conexão, todo fluxo de atualizaão de informações é feita pora ele.

O processo de trabalho:

- É feita uma requisição para inicar o WebSocket
- A conxeção com WebSocket é realizada
- O Frontend envia o link do video o qual será convertido
- O backend começa a conversão e envar por WebSocket os status do precesso

### Tecnologias:

- ReactJS
- Next.JS
- Socket.IO Client
- Styled Components

### To-Do

- [x] Estilar pagina em geral
- [x] Estilizar barra de URL
- [x] Criar _loading_
- [x] Estilizar botão de download
- [ ] Configurar barra de renomear arquivo
- [ ] Manipular erros