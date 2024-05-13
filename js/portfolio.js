// Suppose que vous avez un fichier project.json contenant vos données de projet
// Voici un exemple de structure JSON pour un projet :
/*

*/

// Récupérer les données du fichier JSON
fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        // Boucle sur chaque projet pour créer la structure HTML
        projects.forEach(project => {
            // Création des éléments HTML
            const isoBox = document.createElement('div');
            isoBox.classList.add('iso-box', 'col-md-3', 'col-sm-3', 'col-xs-12');
            project.type.forEach(type => {
                isoBox.classList.add(type);
            });

            const portfolioThumb = document.createElement('div');
            portfolioThumb.classList.add('portfolio-thumb');

            const img = document.createElement('img');
            img.src = project.image;
            img.classList.add('fluid-img');
            img.alt = 'portfolio img';

            const portfolioOverlay = document.createElement('div');
            portfolioOverlay.classList.add('portfolio-overlay');

            const title = document.createElement('h3');
            title.classList.add('portfolio-item-title');
            title.textContent = project.name;

            const technologies = document.createElement('p');
            technologies.textContent = project.technologies;

            const description = document.createElement('p');
            description.textContent = project.description;

            const githubLink = document.createElement('a');
            githubLink.target = '_blank';
            githubLink.href = project.github;
            githubLink.classList.add('button-overlay');
            githubLink.textContent = 'GitHub';

            const githubPageLink = document.createElement('a');
            githubPageLink.target = '_blank';
            githubPageLink.href = project.githubPage;
            githubPageLink.classList.add('button-overlay');
            githubPageLink.textContent = 'GitHub Page';

            // Ajouter les éléments à la structure HTML
            portfolioOverlay.appendChild(title);
            portfolioOverlay.appendChild(technologies);
            portfolioOverlay.appendChild(description);
            portfolioOverlay.appendChild(githubLink);
            portfolioOverlay.appendChild(githubPageLink);

            portfolioThumb.appendChild(img);
            portfolioThumb.appendChild(portfolioOverlay);

            isoBox.appendChild(portfolioThumb);

            document.getElementById('main-container-project').appendChild(isoBox); 
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des données du fichier JSON :', error));
