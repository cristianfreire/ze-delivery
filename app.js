const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	const searchTerm = searchInput.value.trim().toLowerCase();
	if (searchTerm.match(/bebida/)) {
		searchResults.innerHTML = `
			<article>
				<h3><a href="#">Zé Delivery</a></h3>
				<p>Entrega de bebidas em até 1h! Confira nossas promoções.</p>
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
