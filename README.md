# Algoritmo K-means para Agrupamento de Dados

Este projeto implementa o **Algoritmo K-means**, uma técnica de **aprendizado não supervisionado** utilizada para realizar o agrupamento de dados (clustering). O código foi desenvolvido utilizando **JavaScript**, **HTML** e **CSS** para proporcionar uma visualização interativa do funcionamento do K-means.

## Autor
    Aluno: Naion Belas Juvenal
    Curso: Análise e Desenvolvimento de Sistemas
    Disciplina: Inteligência Artificial - (Aula 08 IA Aprendizagem não supervisionada)
    Instituição: FATEC de Santana de Parnaíba
    E-mail: naionbelas@gmail.com

## Técnica Utilizada: **K-means**

### O que é o K-means?

O **K-means** é um algoritmo de aprendizado não supervisionado amplamente utilizado para realizar **clustering** (agrupamento). O objetivo principal do K-means é dividir um conjunto de dados em **K grupos** (clusters) baseados em características compartilhadas entre os dados. O algoritmo segue os seguintes passos:

1. **Inicialização**: Seleciona aleatoriamente K pontos (chamados de centros ou centroides).
2. **Atribuição de Clusters**: Cada ponto do conjunto de dados é atribuído ao cluster cujo centro está mais próximo.
3. **Atualização dos Centros**: Os centros de cada cluster são recalculados como a média dos pontos atribuídos a ele.
4. **Repetição**: Os passos de atribuição e atualização continuam até que os centros dos clusters não mudem significativamente (convergência).

### Como o K-means foi implementado?

Neste projeto, o K-means foi implementado em JavaScript, e os resultados são visualizados em um **canvas HTML5**. O algoritmo agrupa 100 pontos aleatórios em 3 clusters, exibindo visualmente a alocação de pontos e os centros de cada cluster.

## Como Rodar o Projeto

Para rodar este projeto, siga os seguintes passos:

1. **Clone o repositório** para a sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/AlgoritmoK-means.git

2. Abra o arquivo index.html em um navegador para ver a visualização interativa do agrupamento de dados.

3. Clique no botão **"Executar K-means"** para iniciar o algoritmo e visualizar os clusters formados.

- **Link do projeto no Pages do github**: https://naionbelas.github.io/AlgoritmoK-means/

### Funcionalidades
- **Geração Aleatória de Dados**: O algoritmo gera 100 pontos aleatórios no espaço 2D para serem agrupados.
- **Execução do Algoritmo K-means**: O algoritmo agrupa os pontos em 3 clusters (k=3) e exibe os resultados no canvas.
- **Visualização dos Centros**: Os centros de cada cluster são destacados com uma cor distinta.
- **Interatividade**: O usuário pode clicar no botão "Executar K-means" para rodar o algoritmo e visualizar os resultados.

## Tecnologias Utilizadas
- **HTML5**: Para a estrutura da página e para criar o canvas onde os pontos e clusters serão desenhados.
- **CSS3**: Para estilizar a página e o canvas.
- **JavaScript**: Para implementar a lógica do algoritmo de K-means e a interatividade da página.

## Contato

  Para dúvidas ou sugestões, entre em contato:
  E-mail: naionbelas@gmail.com

## Licença
- Este projeto está licenciado sob a MIT License.
  Este projeto é de uso educacional e pode ser modificado e redistribuído conforme necessário para fins de aprendizado. Não se esqueça de dar os devidos créditos ao autor.

## Agradecimentos

Agradeço ao sistema de inteligência artificial ChatGPT (https://chat.openai.com/) pelo apoio na implementação e no desenvolvimento do projeto.
```


Esse `README.md` fornece uma visão geral completa do projeto, orientações sobre como executá-lo e informações sobre sua implementação.

