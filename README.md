# Pós-graduação | Desenvolvimento Web Full Stack
### Microserviços - Node
Projeto desenvolvido para obtenção de nota na disciplina de Microsserviços e API.

#### Professor:
>   - Me. Thiago Rodrigues

#### Alunos:
>   - Miquéias R. M. Soares
>   - Eduardo Henrique Fidelis Porto
>   - Daniel de Vasconcelos Lopes
>   - Vinicius de Freitas Ferreira
>   - Kleber Napoleão Nunes de Oliveira Barros
 
## Descrição
#### workspace

Foi desenvolvido os microserviços abaixo cada um com suas responsabilidades:
- users-ms
- posts-ms
- auth-ms
- service-register
- gateway

Ao subir um dos serviços o mesmo é registrado "service-register" onde fica mapeado os endereços de cada microserviço e o "gateway" faz a orquestração desses, centralizando as chamadas em único ponto de acesso.

Também foi implementado um sistema de autenticação/autorização no sistema onde foi seguido as etapas abaixo:
- Os microserviços de "posts" e "users" tem rotas protegidas e são acessadas a partir de um token jwt.
- A única rota liberada é de consultar um users pelo username.  
- O microserviço "auth-ms" gera um token jwt com tempo de expiração de uma hora. Esse microserviço tem uma rota de `/login` e também se registra no service registry.

#### Tecnologias Utilizadas / Dependências
- Node.js
- axios
- bcrypt
- dotenv
- express
- jsonwebtoken
- mysql2
- sequelize

## Get started

#### 1 - Clonar o Repositório:
- Com ssh ou https:

ssh:
```
$ git clone git@github.com:mqsoares/node-microservices.git
$ cd node-api
````

#### Configurações inicias

- Renomear o `.env-example` de cada microserviço para `.env`
- Definir as configurações de banco de dados de acordo com seu local no .env

#### Install - Instalar Depedências
- Dentro de cada serviço.
```
$ npm install
```
#### Run
> - Aqui é interessante seguir uma ordem para subir os microservirços
> - Primeiro sobe o `service-register` depois os demais
> - Lembrando que tem que rodar o comando dentro de cada micrserviço
```
$ npm run dev
```

## Rotas gateway

| Método | Rota                                 | Descrição                                                                                                     |
|--------|--------------------------------------|---------------------------------------------------------------------------------------------------------------|
|        | /:serviceName/*                      | Faz a ponte entre os microseviços cadastrados no service-register                                             | 

## Rotas service-register

| Método | Rota                                 | Descrição                                                                                                     |
|--------|--------------------------------------|---------------------------------------------------------------------------------------------------------------|
| POST   | /                                    | Lista todos os serviços registrados                                                                           | 
| GET    | /services/:name                      | Busca um serviços pelo nome                                                                                   | 
| POST   | /register                            | Registrar serviços                                                                                            |

## Rotas auth-ms

| Método | Rota                                 | Descrição                                                                                                     |
|--------|--------------------------------------|---------------------------------------------------------------------------------------------------------------|
| POST   | /login                               | Autenticação do user                                                                                          | 


## Rotas posts-ms

| Método | Rota                                 | Descrição                                                                                                     |
|--------|--------------------------------------|---------------------------------------------------------------------------------------------------------------|
| GET    | /posts                               | Lista todos os posts                                                                                          | 
| GET    | /posts/user/:user_id                 | Busca posts de um usuário pelo nome                                                                           | 
| POST   | /posts                               | Cadastra um post                                                                                              |


## Rotas users-ms

| Método | Rota                                 | Descrição                                                                                                     |
|--------|--------------------------------------|---------------------------------------------------------------------------------------------------------------|
| GET    | /users                               | Lista todos os usuários e seus posts                                                                          | 
| GET    | /users/:username                     | Busca um usuário pelo nome                                                                                    | 
| POST   | /users                               | Cadastra um usuário                                                                                           |

