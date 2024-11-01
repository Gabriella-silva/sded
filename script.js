document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/dados')
        .then(response => response.json())
        .then(dados => {
            const tbody = document.querySelector('#tabela tbody');
            dados.forEach(item => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${item.id}</td><td>${item.nome}</td><td>${item.valor}</td>`;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro:', error));
});
