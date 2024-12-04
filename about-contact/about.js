async function fetchData(endpoint, elementId) {
  try {
    const response = await fetch(`https://easycontactsagenda.azurewebsites.net/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    displayData(data, elementId);
  } catch (error) {
    document.getElementById(elementId).textContent = `Error: ${error.message}`;
  }
}

function displayData(data, elementId) {
  const targetElement = document.getElementById(elementId);
  targetElement.textContent = JSON.stringify(data, null, 2);
}

window.onload = () => {
  fetchData('/api/view', 'viewData');
  fetchData('/api/procedure', 'procedureData');
};
