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

## Cenarios de Testes

# CT01 - Cadastrar entregador Moto
    Preencher o Cadastro de um novo entregador
    E escolher Moto como veiculo de entrega
    Enviar documento valido
    Cadastro deve ser realizado com sucesso

# CT02 - Cadastrar entregador bike eletrica
    Preencher o Cadastro de um novo entregador
    E escolher Bike Eletrica como veiculo de entrega
    Enviar documento valido
    Cadastro deve ser realizado com sucesso

# CT03 - Cadastrar entregador Van/Carro
    Preencher o Cadastro de um novo entregador
    E escolher Van/Carro como veiculo de entrega
    Enviar documento valido
    Cadastro deve ser realizado com sucesso 

# CT04 - Cadastrar entregador com CPF invalido
    Preencher o Cadastro de um novo entregador
    Mas passar um CPF invalido
    Campo CPF deve exibir como invalido

# CT05 - Cadastrar entregador com Email invalido
    Preencher o Cadastro de um novo entregador
    Mas passar um email invalido
    Campo Email deve exibir como invalido

# CT06 - Validação de campos obrigatórios
    Deixar campos sem preencher 
    E finalizar o cadastro
    Deve aprensentar em tela todos os campos obrigatórios 
