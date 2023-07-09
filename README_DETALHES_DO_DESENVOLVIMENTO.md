useState: gerencia estado 
Podemos visualizar e alterar um estado em particular
Exemplo usado counter

[counter, setCounter] = useState(0)
  const increaseCounter = () => counter + 1

<h1> Counter: counter
<Button> onClick={() => setCounter(increaseCounter)}

useEffect: Usamos pra causar um efeito colateral dentro do fluxo de renderização
Exemplo usado User

1-) 
  Criamos o arquivo APIContext na pasta Context
  para compartilhar dados dentro de uma árvore de componentes
  Em seguida PlanetsProvider que vai ser responsável por fazer
  a chamada a API e prover a lista de planetas para popularmos 
  a tabela

2-)
  Criamos a tabela e a populamos com os dados retornados da API
  Incrementamos uma mensagm de loading para não deixar o usuario
  sem informação durante o tempo de resposta da API e também
  pra aplicação não quebrar

3-)
  Criamos o componente Filter e começamos pelo mais fácil, o filtro por nome.
  Em seguida criamos os selects e inputs necessários para fazermos divos tipos de filtragem
  Aplicamos a lágica aos elementos HTML com as funções handle(ColumnChange, ConditionChange...)
  E mais lógica e javaScript puro para as condições na função updatedFilters

4-)
  Agora é hora de incrementar as funções que serão responsaveis pela comunicação
  entre o componente Filters e o componente Table. Para isso incrementamos as funções
  handleSearchChange e handleFiltereData em Filters.jsx e seus respectivos nomes no
  arquivo Table.jsx. Lembrando que elas devem ser passadas como parametro da função
  mãe/pai Filters({handleSearchChange, handleFiltereData}) 

5-)
  Na versão final a função handleFiltereData após adicionar o novo filtro ao estado appliedFilters, utilizamos o array updatedFilters para verificar se todos os filtros estão sendo aplicados corretamente. A função every verifica se todos os elementos do array retornam true. Se todos os filtros retornarem true, o planeta é mantido na lista filtrada

6-)
  Usamos APIContext e Hooks useState com as const filteredData/setFilteredData,
  selectedFilters/setSelectedFilters, availableColumns/setAvailableColumns
  para manipular o estado dos filtros, usarmos filtros acumulativos por exemplo:
  rotation_period = 23 && orbital_period > 340 para trazer apenas os planetas
  que atendam as condições de todos os filtros aplicados, quantos e quaisquer que sejam.
  Também implementamos a funcionalidade de remover a option selecionada do select, para
  que o usuario não possa aplicar filtros redundantes e sem sentido como:
  rotation_period > 30 && rotation_period < 20

7-)
  Por fim, a ultima funcionalidade incrementada é o botão Delete Filters e a função
  handleDeleteFilters, que apaga todos os filtros que são visualizados na tela em "Filtros selecionados" e seta os estados de filteredData, selectedFilters, e avalibleColumns para seu estado inicial. Assim resetando todos os filtros, e chamamos essa funcionalidade na Table.jsx com handleRasetFilters.

8-)
  É utilizado prop-types para especificar e garantir os tipos de dados esperados para 
  cada prop, validar as props dos componente React e fornecer uma documentação mais clara.

9-)
  Encerramos o projeto com uma estilização em CSS, e usando Hooks para incrementar um
  Dark mode e Light mode temático com a estética de Star Wars

Obrigado pela sua companhia, espero que tenha gostado!