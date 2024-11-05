# Algoritmo K-means para Agrupamento de Dados

Este projeto implementa o **Algoritmo K-means**, uma técnica de **aprendizado não supervisionado** utilizada para realizar o agrupamento de dados (clustering). O código foi desenvolvido utilizando **JavaScript**, **HTML** e **CSS** para proporcionar uma visualização interativa do funcionamento do K-means.

### Dados do Aluno: 
    **Aluno**: Naion Belas Juvenal
    **Curso**: Análise e Desenvolvimento de Sistemas
    **Disciplina**: Inteligência Artificial
    **Instituição**: FATEC de Santana de Parnaíba
    **E-mail**: naionbelas@gmail.com

### O que é o K-means?

O **K-means** é um algoritmo de aprendizado não supervisionado amplamente utilizado para realizar **clustering** (agrupamento). O objetivo principal do K-means é dividir um conjunto de dados em **K grupos** (clusters) baseados em características compartilhadas entre os dados. O algoritmo segue os seguintes passos:

1. **Inicialização**: Seleciona aleatoriamente K pontos (chamados de centros ou centroides).
2. **Atribuição de Clusters**: Cada ponto do conjunto de dados é atribuído ao cluster cujo centro está mais próximo.
3. **Atualização dos Centros**: Os centros de cada cluster são recalculados como a média dos pontos atribuídos a ele.
4. **Repetição**: Os passos de atribuição e atualização continuam até que os centros dos clusters não mudem significativamente (convergência).

### Como o K-means foi implementado?

Neste projeto, o K-means foi implementado em JavaScript, e os resultados são visualizados em um **canvas HTML5**. O algoritmo agrupa 100 pontos aleatórios em 3 clusters, exibindo visualmente a alocação de pontos e os centros de cada cluster.

## Tecnologias Utilizadas
- **HTML**: Estruturação da página web.
- **CSS**: Estilização e design da página.
- **JavaScript**: Lógica para exibição dos imóveis e filtro dinâmico por preço, além do uso de **Agrupamento de K-médias**.

#### Como funciona o K-means?
1. Geração Aleatória de Dados: O algoritmo gera 100 pontos aleatórios no espaço 2D para serem agrupados.
2. Execução do Algoritmo K-means: O algoritmo agrupa os pontos em 3 clusters (k=3) e exibe os resultados no canvas.
3. Visualização dos Centros: Os centros de cada cluster são destacados com uma cor distinta.
4. Interatividade: O usuário pode clicar no botão "Executar K-means" para rodar o algoritmo e visualizar os resultados.

### Exemplos de uso do K-means:
- **Segmentação de imóveis**: Agrupar imóveis de acordo com seu preço, número de quartos, localização ou tamanho do lote.
- **Recomendações**: A técnica pode ser usada para sugerir imóveis com características semelhantes aos que o usuário já visualizou ou está interessado.
- **Análise de mercado**: Identificação de padrões de distribuição de imóveis em diferentes regiões ou faixas de preço.

## Estrutura do Projeto
A estrutura do projeto é composta pelos seguintes arquivos:
1. **index.html**: Arquivo principal que contém a estrutura da página.
2. **styles.css**: Arquivo de estilo responsável pela aparência da página e da tabela.
3. **script.js**: Arquivo de script que contém a lógica para filtrar os imóveis, exibi-los dinamicamente e aplicar a técnica de **Agrupamento de K-médias**.

## Como Executar

1. Faça o download ou clone este repositório para o seu computador.
2. Abra o arquivo `index.html` em um navegador de sua preferência.

Não é necessário um servidor web, pois o projeto utiliza apenas arquivos estáticos (HTML, CSS e JavaScript).

## Como Funciona

1. O usuário abre a página `index.html`, onde os imóveis são carregados automaticamente na tabela.
2. O formulário permite inserir um valor de preço máximo.
3. Ao submeter o formulário, a tabela é atualizada para exibir apenas os imóveis que atendem ao critério de preço.
4. A técnica de **Agrupamento de K-médias** é aplicada para segmentar os imóveis com base em suas características e criar grupos, ajudando na visualização de imóveis semelhantes.
5. Todos os imóveis são exibidos inicialmente, sem nenhum filtro aplicado.

## Imagem de Exemplo

![Exemplo de Interface](link-da-imagem-exemplo.jpg)

## Contribuições

Este projeto foi desenvolvido para fins acadêmicos e, portanto, não está aberto a contribuições externas. No entanto, sugestões de melhoria ou questões podem ser enviadas através de **Issues** no GitHub.

## Contato

  Para dúvidas ou sugestões, entre em contato:
  E-mail: naionbelas@gmail.com

## Licença

  Este projeto é de uso educacional e pode ser modificado e redistribuído conforme necessário para fins de aprendizado. Não se esqueça de dar os devidos créditos ao autor.

## Agradecimentos

Agradeço ao sistema de inteligência artificial ChatGPT (https://chat.openai.com/) pelo apoio na implementação e no desenvolvimento do projeto.
```


Esse `README.md` fornece uma visão geral completa do projeto, orientações sobre como executá-lo e informações sobre sua implementação.

