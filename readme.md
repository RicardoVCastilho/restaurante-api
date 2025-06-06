# API - Restaurante

Este projeto é uma API RESTful desenvolvida em Node.js com Express e MySQL. Ela gerencia clientes e pedidos, permitindo testar conceitos de bancos relacionais.  
Este passo a passo serve para configurar e executar o projeto em outro computador (ex: sala de aula).

---

## ✅ Requisitos

- Node.js e npm instalados
- MySQL instalado (com MySQL Workbench)
- Git instalado

---

## 📁 Passo 1: Clonar o Repositório

Abra o terminal e execute:

```bash
git clone https://github.com/seuusuario/seurepositorio.git
cd seurepositorio
```

## ⚙️ Passo 2: Criar o arquivo .env
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_mysql
DB_DATABASE=restaurante
PORT=3000
```

Substitua sua_senha_mysql pela senha real do banco.

## 📦 Passo 3: Instalar dependências
No terminal, dentro da pasta do projeto, rode:

```
npm install
```

## 🗃️ Passo 4: Criar o banco no MySQL Workbench
1. Abra o MySQL Workbench

2. Conecte-se ao servidor local

3. Crie o banco com o comando:

```bash
CREATE DATABASE restaurante;
```

## 🧱 Passo 5: Criar as tabelas
Com o banco restaurante selecionado, execute:

```sql
USE restaurante;

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  cidade VARCHAR(100),
  telefone VARCHAR(20)
);

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  produto VARCHAR(100),
  valor DECIMAL(10,2),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

## 🔃 Passo 6 (Opcional): Inserir dados de exemplo

```sql
INSERT INTO clientes (nome, cidade, telefone) VALUES
('João Silva', 'São Paulo', '11999999999'),
('Maria Oliveira', 'Rio de Janeiro', '21988888888');

INSERT INTO pedidos (cliente_id, produto, valor) VALUES
(1, 'Arroz', 20.50),
(2, 'Feijão', 15.30);
```

## ▶️ Passo 7: Rodar a API
No terminal:
```bash
node index.js
```

Se tudo estiver certo, aparecerá:
```bash
Servidor rodando na porta 3000
Conectado ao MySQL
```

## 🔍 Passo 8: Testar com Thunder Client

Exemplos de rotas:

| Método | Rota                         | Descrição                       |
| ------ | ---------------------------- | ------------------------------- |
| GET    | `/api/clientes/all-clientes` | Lista todos os clientes         |
| GET    | `/api/clientes/:id`          | Retorna um cliente específico   |
| POST   | `/api/clientes`              | Cria um novo cliente            |
| PUT    | `/api/clientes/:id`          | Atualiza os dados de um cliente |
| DELETE | `/api/clientes/:id`          | Remove um cliente               |

| Método | Rota                       | Descrição              |
| ------ | -------------------------- | ---------------------- |
| GET    | `/api/pedidos/all-pedidos` | Lista todos os pedidos |
| POST   | `/api/pedidos`             | Cria um novo pedido    |


## 📝 Observação
Certifique-se de que a porta configurada no .env e o nome do banco estejam corretos.
Se usar nodemon, pode iniciar com:
```bash
npx nodemon index.js
```