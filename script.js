// Global function called when data is passed to the visualization
function draw(data) {
  const container = document.getElementById('table-container');
  container.innerHTML = ''; // Clear previous content

  // Create a table element
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';

  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  // Get headers from data schema
  data.fields.forEach(field => {
    const th = document.createElement('th');
    th.innerText = field.name;
    th.style.border = '1px solid #ccc';
    th.style.padding = '8px';
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  data.rows.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.innerText = cell;
      td.style.border = '1px solid #ccc';
      td.style.padding = '8px';
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  // Append the table to the container
  container.appendChild(table);
}

// Listen for data from Looker Studio
lookerStudio.events.addEventListener(
  lookerStudio.events.Data,
  function (event) {
    draw(event.data);
  }
);
