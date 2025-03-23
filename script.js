
// Formulaire de contact

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    // Réinitialisation des messages d'erreur
    document.querySelectorAll('.error-message').forEach(message => message.textContent = '');

    // Récupération des valeurs des champs
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const sujet = document.getElementById('sujet').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation des champs
    if (!prenom) {
        document.getElementById('prenom-error').textContent = 'Veuillez saisir votre prénom.';
        return;
    }

    if (!nom) {
        document.getElementById('nom-error').textContent = 'Veuillez saisir votre nom.';
        return;
    }

    if (!sujet) {
        document.getElementById('sujet-error').textContent = 'Veuillez saisir le sujet de votre message.';
        return;
    }

    if (!message) {
        document.getElementById('message-error').textContent = 'Veuillez saisir votre message.';
        return;
    }

    // Si toutes les validations sont réussies, le formulaire est envoyé

    alert('Formulaire envoyé avec succès !');
});


// Bouton "Retour en haut"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Haut';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.backgroundColor = '#000000';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '0px';
backToTopButton.style.display = 'none';
backToTopButton.style.cursor = 'pointer';

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Afficher le bouton "Retour en haut" au défilement
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});