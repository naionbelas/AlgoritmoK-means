// Função para exibir o projeto selecionado
function showProject(project) {
    // Esconde todos os projetos
    document.querySelectorAll('.project').forEach(div => {
        div.style.display = 'none';
    });
    // Exibe o projeto selecionado
    document.getElementById(project).style.display = 'block';
}

// Exibe o projeto K-means por padrão ao carregar a página
showProject('kmeans');

// --------------------------------------------------------
// Projeto Imobiliária: Manipulação dos imóveis e filtro
// --------------------------------------------------------

// Array de objetos representando os imóveis
const imoveis = [
    { id: 1, numero_quartos: 3, tamanho_lote: 150.00, localizacao: 'Centro', preco: 300000.00 },
    { id: 2, numero_quartos: 2, tamanho_lote: 80.00, localizacao: 'Bairro A', preco: 200000.00 },
    { id: 3, numero_quartos: 4, tamanho_lote: 200.00, localizacao: 'Bairro B', preco: 450000.00 },
    { id: 4, numero_quartos: 1, tamanho_lote: 60.00, localizacao: 'Bairro C', preco: 150000.00 },
    { id: 5, numero_quartos: 3, tamanho_lote: 120.00, localizacao: 'Centro', preco: 350000.00 },
    { id: 6, numero_quartos: 5, tamanho_lote: 250.00, localizacao: 'Bairro D', preco: 600000.00 }
];

// Função para exibir os imóveis na tabela
function exibirImoveis(imoveisFiltrados) {
    // Seleciona o corpo da tabela onde os imóveis serão exibidos
    const tbody = document.querySelector('#imoveisTable tbody');
    tbody.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    // Preenche a tabela com os imóveis filtrados
    imoveisFiltrados.forEach(imovel => {
        const row = document.createElement('tr'); // Cria uma nova linha para cada imóvel
        row.innerHTML = `
            <td>${imovel.id}</td>
            <td>${imovel.numero_quartos}</td>
            <td>${imovel.tamanho_lote}</td>
            <td>${imovel.localizacao}</td>
            <td>${imovel.preco.toFixed(2)}</td>
        `;
        tbody.appendChild(row); // Adiciona a linha à tabela
    });
}

// Função para filtrar os imóveis com base no preço máximo
function filtrarImoveis() {
    // Pega o valor do preço máximo inserido no campo de filtro
    const filterValue = document.querySelector('#filter').value;
    
    // Filtra os imóveis com base no preço máximo inserido pelo usuário
    const imoveisFiltrados = imoveis.filter(imovel => imovel.preco <= filterValue);
    
    // Exibe os imóveis filtrados
    exibirImoveis(imoveisFiltrados);
}

// Adiciona o evento de submit ao formulário de filtro
document.querySelector('#filterForm').addEventListener('submit', event => {
    event.preventDefault(); // Impede o envio do formulário
    filtrarImoveis(); // Chama a função para filtrar os imóveis
});

// Exibe todos os imóveis inicialmente (sem filtro)
exibirImoveis(imoveis);

// --------------------------------------------------------
// Projeto K-means: Algoritmo de agrupamento de pontos
// --------------------------------------------------------

const canvas = document.getElementById('canvas'); // Obtém o elemento canvas
const ctx = canvas.getContext('2d'); // Obtém o contexto para desenhar no canvas

// Função para gerar pontos aleatórios
function generateRandomPoints(n, maxX, maxY) {
    let points = [];
    for (let i = 0; i < n; i++) {
        points.push({
            x: Math.random() * maxX,  // Coordenada X aleatória
            y: Math.random() * maxY   // Coordenada Y aleatória
        });
    }
    return points;
}

// Função para desenhar os pontos no canvas
function drawPoints(points, clusters = []) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas antes de desenhar

    // Desenha todos os pontos no canvas
    points.forEach((point, index) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI); // Desenha um círculo para o ponto
        ctx.fillStyle = clusters[index] ? clusters[index].color : '#000';  // Define a cor do ponto
        ctx.fill();  // Preenche o círculo com a cor
    });
}

// Função para desenhar os centros dos clusters
function drawCentroids(centroids) {
    centroids.forEach(centroid => {
        ctx.beginPath();
        ctx.arc(centroid.x, centroid.y, 10, 0, 2 * Math.PI); // Desenha um círculo maior para os centros
        ctx.fillStyle = centroid.color; // Define a cor do centro
        ctx.fill();  // Preenche o círculo com a cor
    });
}

// Função principal do algoritmo K-means para agrupar os pontos
function kMeans(points, k = 3, iterations = 100) {
    let centroids = [];  // Array para armazenar os centros dos clusters
    let clusters = [];  // Array para armazenar os clusters dos pontos
    let colors = ['#FF5733', '#33FF57', '#3357FF'];  // Cores para os 3 clusters

    // Inicializa os centros dos clusters com coordenadas aleatórias
    for (let i = 0; i < k; i++) {
        centroids.push({
            x: Math.random() * canvas.width,  // Coordenada X aleatória
            y: Math.random() * canvas.height, // Coordenada Y aleatória
            color: colors[i]  // Atribui uma cor única para cada centro
        });
    }

    // Algoritmo de agrupamento: realiza iterações para agrupar os pontos
    for (let iter = 0; iter < iterations; iter++) {
        // Passo 1: Atribuir pontos aos clusters mais próximos
        clusters = points.map(point => {
            // Calcula a distância de cada ponto até os centros
            let distances = centroids.map(centroid =>
                Math.sqrt(Math.pow(centroid.x - point.x, 2) + Math.pow(centroid.y - point.y, 2))
            );
            // Encontra o índice do centro mais próximo
            let closestCentroidIndex = distances.indexOf(Math.min(...distances));
            return centroids[closestCentroidIndex]; // Atribui o ponto ao cluster mais próximo
        });

        // Passo 2: Atualizar os centros dos clusters com a média dos pontos atribuídos
        let newCentroids = centroids.map((centroid, i) => {
            // Filtra os pontos atribuídos ao centro atual
            let assignedPoints = points.filter((point, index) => clusters[index] === centroid);
            // Calcula a média das coordenadas X e Y dos pontos atribuídos ao centro
            let newX = assignedPoints.reduce((sum, point) => sum + point.x, 0) / assignedPoints.length;
            let newY = assignedPoints.reduce((sum, point) => sum + point.y, 0) / assignedPoints.length;

            return { ...centroid, x: newX, y: newY }; // Atualiza as coordenadas do centro
        });

        // Verifica se os centros mudaram. Se não mudaram, o algoritmo convergiu.
        if (newCentroids.every((newCentroid, i) => newCentroid.x === centroids[i].x && newCentroid.y === centroids[i].y)) {
            break; // Se não houver mudanças, interrompe o algoritmo
        }
        centroids = newCentroids;  // Atualiza os centros para a próxima iteração
    }

    // Retorna os clusters e os centros
    return { clusters, centroids };
}

// Função para rodar o K-means e desenhar os resultados no canvas
function runKMeans() {
    // Gera 100 pontos aleatórios no canvas
    let points = generateRandomPoints(100, canvas.width, canvas.height);

    // Executa o algoritmo K-means para agrupar os pontos em 3 clusters
    let { clusters, centroids } = kMeans(points, 3);

    // Desenha os pontos e os centros no canvas
    drawPoints(points, clusters);
    drawCentroids(centroids);
}

// Chama a função para rodar o K-means assim que a página for carregada
runKMeans();
