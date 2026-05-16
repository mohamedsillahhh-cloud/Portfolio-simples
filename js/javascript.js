

// Destacar botões do menu ao passar o mouse
document.addEventListener('DOMContentLoaded', function() {
	const menuLinks = document.querySelectorAll('nav ul li a');
	menuLinks.forEach(link => {
		link.addEventListener('mouseenter', () => {
			link.style.backgroundColor = '#ffd700';
			link.style.color = '#2d3e50';
			link.style.borderRadius = '6px';
			link.style.transition = 'all 0.2s';
		});
		link.addEventListener('mouseleave', () => {
			link.style.backgroundColor = '';
			link.style.color = '';
		});
	});

	// Confirmação ao enviar formulário de contato
	const form = document.querySelector('form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			alert('Mensagem enviada com sucesso!');
			form.reset();
		});
	}

	// Rolagem suave para âncoras
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
});

