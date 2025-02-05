# Exemplo de Projeto com Supabase e Next.js 15

Este projeto é um pequeno exemplo de como utilizar a biblioteca **Supabase** integrada com as **Server Actions** do Next.js 15. A aplicação demonstra como realizar operações simples de CRUD, como criar e excluir posts, utilizando Supabase como back-end e Next.js para renderização do front-end.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React para desenvolvimento de aplicações web escaláveis e performáticas.
- **Supabase**: Plataforma de back-end como serviço, que oferece banco de dados PostgreSQL, autenticação e outros recursos.
- **Server Actions**: Funcionalidade do Next.js 15 que permite executar código no servidor, simplificando a interação com APIs e bancos de dados.

## Funcionalidades

- Cadastro de posts (com título e conteúdo).
- Exibição de uma lista de posts cadastrados.
- Deleção de posts existentes.

## Como Rodar o Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/luizgabrielc/posts-example-with-supabase-and-next15.git
2. Navegue até o diretório do projeto::

   ```bash
   cd posts-example-with-supabase-and-next15
   
3. Instale as dependências:

   ```bash
   npm install
   
4. Configure as credenciais do Supabase:
   Crie uma conta no Supabase e configure o seu projeto. Adicione as variáveis de ambiente necessárias para a autenticação e conexão com o banco de dados no arquivo .env.local:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=<Sua URL do Supabase>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<Sua Chave Anônima do Supabase>
   
5. Acesse a aplicação no seu navegador:
   ```bash
   http://localhost:3000
