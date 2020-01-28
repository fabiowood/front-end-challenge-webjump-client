O acesso à aplicação em si deve ser efetuado por meio do repositório a seguir, o qual contém a versão consolidada do último Build do desenvolvimento front-end, permitindo as chamadas aos end-points estalecidos pela Webjump:
https://bitbucket.org/fabiowood/assessment-frontend-webjump/src/desafio/

O esclarecimento é necessário, pois o código neste repositório do git-hub passou por um processo de Build, sendo que o resultado final foi transportado ao arquivo de 'back-end' da Webjump. Dessa forma, é possível acessar os end-points, por meio do localhost:8888.

=======================================================================================================================

Front-End Challenge Webjump – Documentação de Suporte:

1) Escopo da Aplicação

- Consiste em uma loja virtual de categorias de produtos, que permita ao usuário pesquisar produtos, adicioná-los ao seu carrinho de compras e efetuar pagamentos fictícios.

2) Aspectos Gerais

- Suporte para IE, Chrome, Safari, Firefox.

- Código semântico e desenvolvimento efetuado na pasta Public disponibilizada pela Webjump.

- Fonte padrão: "Open Sans". 

Obs: a mesma fonte foi mantida para o menu e para o botão de pesquisa, ao contrário do requisito estabelecido neste challenge, pois seu design foi mais aderente ao design proposto pela Webjump.

3) Funcionalidades da Aplicação

	- Permite realizar uma busca por texto para encontrar produtos específicos, pelos seus nomes.

 	- Permite a visualização da lista completa de produtos por categoria, no caso, Camisetas, Calças e Calçados.

	- Contém uma side-bar ao lado esquerdo, com as seguintes opções de filtro:

(i) Por categoria: roupas (opção de abertura em Camisetas e Calças), calçados e acessórios. Obs: para o item Acessórios, optou-se por apresentar os resultados de Camisetas, por não haver produtos em uma categoria específica de acessórios. Porém, a aplicação está pronta para receber uma nova categoria, caso necessário. 

(ii) Cores: três opções de blocos de cores => para camisetas e calçados.

(iii) Gênero: masculino ou feminino => somente para calças.

(iv) Por tipo de produto (ex: casual, corrida, social). Opções variáveis por categoria de produtos.

- A SideBar captura os resultados de uma busca por nome do produto (componente 	SearchBox) e adequa o display de filtros para a categoria correspondente ao produto encontrado.

- O display central da aplicação contém:

(i) Título da seção (ex: Camisetas), indicando a categoria de produtos apresentados em tela. Ao abrir a aplicação, é apresentada a categoria Camisetas como padrão.

(ii) opções de ordenação da apresentação dos produtos: em linhas ou em colunas.

(iii) opções de ordenação dos produtos por suas características, como o preço (ex: menor preço). Essa ordenação considera eventuais filtros já aplicados pelo usuário por meio da side-bar, como por exemplo as cores, no caso de sapatos.

(iv) cards por produto, contendo uma imagem, o título do produto, o preço e o botão Comprar. Ao clicar em Comprar, o produto é adicionado ao carrinho de compras. A cada novo clique, é adicionada 1 quantidade ao produto já selecionado.

(v) Para os produtos que estejam em promoção, são apresentados o preço original riscado e, à direita desse valor, o preço praticado naquele momento da promoção.

- Permite adicionar items a um carrinho de compras e se direcionar para a CheckOutPage, na qual se pode visualizar, adicionar ou remover itens, bem como 	visualizar dinamicamente o total a pagar.

- Permite a manutenção dos itens no carrinho de compras, mesmo em caso de atualização da página, de fechamento da aba ou mesmo de fechamento do browser por completo.

- Permite a experiência de simulação de um pagamento por cartão de crédito fictício.

- Permite criar uma conta ou realizar sign-in por uma conta do Google.


4) Estrutura da Aplicação

Páginas:

- CollectionPage => display da página de navegação geral nos produtos, a qual será responsável por renderizar, em conjunto com o componente Collection-Item, a lista de produtos por categoria, conforme seleção do usuário. 

- SignUpSignInPage => página para a criação de um novo usuário na aplicação, bem como para sign-in na aplicação, seja pelo método e-mail/password, seja pelo método Sign-InWithGoogle.

- CheckOutPage =>  página de confirmação de compra dos produtos. É uma rota específica na aplicação, para que o usuário possa: (i) visualizar os produtos que estão em seu carrinho de compras; (ii) adicionar ou remover algum item; (iii) adicionar ou diminuir as quantidades a comprar por item.

Componentes:

- SignInSignUpDisplay: componente para renderizar o primeiro bloco ao topo da tela, contendo as opções de efetuar sign-in e sign-up na aplicação.

- SignIn: componente para renderizar o formulário de login à aplicação.

- SignUp: componente para renderizar o formulário de criação de uma conta na aplicação.

- SearchBox: componente exclusivo para efetuar buscas por produtos na aplicação. A busca é acionada ao clicar no botão ‘Buscar’. Contém também o logo da aplicação.

- SearchErrorMessage: componente para uso sempre que for necessário apresentar ao usuário uma mensagem de resultados não encontrados em uma busca.

- Header: componente exclusivo para apresentar as opções de Página Inicial, Camisetas, Calças, Calçados e Contato. Inclui o componente CartIcon, que representa o carrinho de compras do usuário, o qual pode ser visualizado previamente ao clicar no ícone. Obs: opções Página Inicial e Contato não foram habilitadas.

- Form-Input: componente exclusivo para padronizar o formato dos formulários de sign-up e sign-in.

- Navigation-Path: componente exclusivo para renderizar, entre o header e a side-bar, o caminho (path) em que o usuário se encontra naquele momento no site, sendo que cada item desse caminho deve estar habilitado com um link para direcionamento à seção desejada pelo usuário.

- SideBar-Filter: componente para renderizar a estrutura da side-bar: tamanho (height), display (flex-column) e as seções de filtros por categorias de produtos, por cores, gênero (masculino, feminino) e tipo de produto (ex: tênis específicos para corrida). Será apresentado somente quando o usuário estiver na CollectionPage.

- SortBox: componente para renderizar a linha acima do display dos produtos, com as opções de filtro para alternar a disposição dos produtos em linha ou em coluna, além de um filtro de ordenação de produtos pelo critério de preços. Será apresentado somente quando o usuário estiver na CollectionPage.

- Collection-Item: componente para renderizar cada item de uma categoria (imagem, titulo do item, preço (original e com desconto, se aplicável), botão ‘Comprar’), em decorrência de buscas por uma categoria específica no Header, por um nome de produto na SearchBox, por seleções de filtros na SideBar-Filter e pelo uso de recursos de ordenação disponíveis no componente SortBox.

- Cart-Icon: componente para renderizar o ícone identificador do carrinho de compras. Ao ser clicado, deve renderizar o componente Cart-Dropdown, ou escondê-lo, caso o dropdown esteja aberto. É fixo, e deve sempre ser apresentado na aplicação, dentro do Header.

- Cart-Dropdown: componente para apresentar a estrutura de listagem dos produtos no carrinho de compras, vísivel a partir de um clique no ícone do carrinho de compras (componente CartIcon). 

- Cart-Item: componente para renderizar cada item específico do carrinho de compras, dentro do componente Cart-DropDown. Contém a imagem e o nome do produto, bem como o preço e a quantidade selecionada para o item.

-  CheckOutItem: componente para renderizar cada item da CheckOutPage. Contém a imagem e o nome do produto, bem como o preço e a quantidade selecionada para o item. O componente possibilita excluir um item do carrinho de compras, bem como adicionar ou remover quantidades por item.

- StripeCheckoutButton: componente para renderizar o button com as funcionalidades de simulação de pagamento, pelo uso do StripePayments. Está dentro da CheckOutPage.

- Footer: componente para renderizar o footer, neste caso, somente uma faixa vermelha.

5) Tecnologias Aplicadas

Tecnologias Utilizadas:

- React, o que inclui: React-DOM, React-Router, React-Redux, React-Stripe-CheckOut, Redux, Redux-Logger,  e Redux-Persist.

- Material-Icons-React, para apresentar e estilizar os ícones disponibilizados pelo Google, por meio do React.

- Reselect, para construir seletores, os quais atuam como otimizadores de performance para a aplicação, ao renderizar um componente somente em caso de mudanças nas informações recebidas por este componente.

- Firebase => para a autenticação de usuários (SignUp, SignIn, SignOut).

- Pré-processador CSS (SASS).

Uso do React Redux para criação de dois reducers específicos:

- ShopReducer: criado para hospedar um item específico de estado associado à loja.

- CartReducer: para hospedar os estados completos de produtos dispostos no carrinho de compras e, posteriormente, na CheckOutPage.

 Configurações de Back-End:

- A aplicação foi desenvolvida em React, por ser uma biblioteca robusta e flexível, adequada ao conceito de SinglePageApplications e capaz de estruturar, com agilidade, rotas de acesso à página de CheckOut e à página de SignIn e SignUp.

- O framework Connect, originalmente aplicado ao arquivo ‘server’, não efetua mais o suporte à construção de rotas em uma aplicação, o que restringiria significativamente a qualidade da aplicação e de seu respectivo código. Dessa forma, foi necessária a busca por uma outra solução.

- Para atender a essa necessidade, foi selecionado o framework Express, amplamente utilizado e com uma documentação e uma comunidade de usuários extensas.

- Esse framework funciona com excelência em conjunto ao Node.js, à linguagem de programação JavaScript e à biblioteca React, justificando a alteração das configurações de back-end para o Express.

6) Organização do Código

P: Cada componente é alocado em um diretório específico do projeto, abaixo do diretório máximo src/Components, que irá conter: (i) o component.jsx do componente; (ii) o styles.scss do componente.

P: Criamos as dependências entre os componentes, fazendo o import de cada componente no componente alvo desejado. 

P: Para os componentes que sejam páginas específicas a serem renderizadas, como CheckOutPage, são criados diretórios específicos somente abaixo de src/Pages, contendo: (i) o component.jsx do componente; (ii) o styles.scss do componente.



=======================================================================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
