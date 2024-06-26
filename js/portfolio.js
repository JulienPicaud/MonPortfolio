fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {            
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

            portfolioOverlay.appendChild(title);
            portfolioOverlay.appendChild(technologies);
            portfolioOverlay.appendChild(description);

            portfolioThumb.appendChild(img);
            portfolioThumb.appendChild(portfolioOverlay);


            if (project.github) {
                const githubLink = document.createElement('a');
                githubLink.target = '_blank';
                githubLink.href = project.github;
                githubLink.classList.add('button-overlay');
                githubLink.textContent = 'GitHub';
                portfolioOverlay.appendChild(githubLink);
            }

            if (project.githubPage) {
                const githubPageLink = document.createElement('a');
                githubPageLink.target = '_blank';
                githubPageLink.href = project.githubPage;
                githubPageLink.classList.add('button-overlay');
                githubPageLink.textContent = 'Site en ligne';
                portfolioOverlay.appendChild(githubPageLink);
            }

            isoBox.appendChild(portfolioThumb);

            document.getElementById('main-container-project').appendChild(isoBox); 
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des données du fichier JSON :', error));
