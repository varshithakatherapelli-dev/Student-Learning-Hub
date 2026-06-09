
const container = document.getElementById('resourceContainer');
const search = document.getElementById('search');

let resources = [];

async function fetchResources() {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/resources');
    resources = await response.json();
    displayResources(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
  }
}

function displayResources(data) {
  container.innerHTML = '';

  data.forEach(resource => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${resource.subject}</h3>
      <p>${resource.description}</p>
      <a href="${resource.link}" target="_blank">Open Resource</a>
      <div>
        <img class="qr" src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${resource.link}" alt="QR Code">
      </div>
    `;

    container.appendChild(card);
  });
}

search.addEventListener('input', () => {
  const filtered = resources.filter(r =>
    r.subject.toLowerCase().includes(search.value.toLowerCase())
  );
  displayResources(filtered);
});

fetchResources();
