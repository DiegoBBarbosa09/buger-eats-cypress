# Automatização de Testes E2E com Cypress

## Descrição

O projeto tem como objetivo realizar testes automatizados E2E para garantir a integridade e funcionamento adequado de uma aplicação web utilizando Cypress como ferramenta principal.

## Instruções de Uso

### Pré-Requisitos

- Visual Studio Code
- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Criar uma pasta onde deseja salvar o projeto
2. Clone este repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
3. Acesse o diretório do projeto: `cd nome-do-repositorio`
4. Instale as dependências: `npm install`

### Execução dos Testes

Para executar os testes:

//Modo headless

```
npm run cy:test
```

//Modo interativo

```
npm run cy:open
```

Após a execução dos testes é possivel visualizar na pasta 'report' o report gerado pelo 'Mocha' e allure report.
Utilizando o allure para gerar um artefato após execução na pipe do github actions e publicando par que o time possa verificar o resultado dos testes
