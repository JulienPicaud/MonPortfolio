  fetch('skills.json')
    .then(response => response.json())
    .then(data => {
      const techContainer = document.getElementById('techContainer');
      data.forEach(skill => {
        const div = document.createElement('div');
        div.classList.add(skill.name);
        const img = document.createElement('img');
        img.classList.add('skills');
        img.src = skill.imagePath;
        img.alt = skill.altText;
        div.appendChild(img);
        techContainer.appendChild(div);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
