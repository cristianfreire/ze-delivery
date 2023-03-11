const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	const searchTerm = searchInput.value.trim().toLowerCase();
	if (searchTerm.match(/bebida/)) {
		searchResults.innerHTML = `
			<article onclick="abrirMeuApp()">
				<h3><a href="#">Zé Delivery</a></h3>
				<p>Acabou a bebida? Chama o Zé</p>
			</article>
		`;
	} else {
		searchResults.innerHTML = `
			<article>
				<h3><a href="#">Título do Resultado da Pesquisa</a></h3>
				<p>Descrição do resultado da pesquisa.</p>
			</article>
			<article>
				<h3><a href="#">Título do Resultado da Pesquisa</a></h3>
				<p>Descrição do resultado da pesquisa.</p>
			</article>
			<article>
				<h3><a href="#">Título do Resultado da Pesquisa</a></h3>
				<p>Descrição do resultado da pesquisa.</p>
			</article>
		`;
	}
});

function abrirMeuApp() {
	if (navigator.userAgent.match(/Android/i)) {
		window.location.href = 'intent://app#Intent;scheme=zedelivery;package=br.com.neoway.zedelivery;end;';
	} else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
		window.location.href = 'zedelivery://';
		setTimeout(function() {
			window.location.href = 'https://itunes.apple.com/app/myapp/';
		}, 25);
	} else {
		alert('Seu dispositivo não suporta esta ação.');
	}
}
