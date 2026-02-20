document.addEventListener('DOMContentLoaded', function() {
  fetch('data/projects.json')
    .then(response => response.json())
    .then(projects => {
      const container = document.getElementById('projects-container');
      const row = document.createElement('div');
      row.className = 'row g-4';

      projects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';

        const card = document.createElement('div');
        card.className = 'card project-card h-100';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body p-4';

        const title = document.createElement('h3');
        title.className = 'h6 fw-bold mb-2';
        title.textContent = project.title;

        const desc = document.createElement('p');
        desc.className = 'text-muted-custom mb-3';
        desc.textContent = project.description;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'd-flex gap-2 flex-wrap';

        const liveBtn = document.createElement('a');
        liveBtn.href = project.liveUrl;
        liveBtn.className = 'btn btn-sm btn-outline-light';
        liveBtn.textContent = 'Live';

        const githubBtn = document.createElement('a');
        githubBtn.href = project.githubUrl;
        githubBtn.className = 'btn btn-sm btn-outline-light';
        githubBtn.textContent = 'GitHub';

        buttonsDiv.appendChild(liveBtn);
        buttonsDiv.appendChild(githubBtn);

        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(buttonsDiv);

        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });

      container.appendChild(row);
    })
    .catch(error => console.error('Error loading projects:', error));
});
