window.addEventListener('load', () => {

  let form = document.getElementById('search-form');
  let content = document.getElementById('content');
  let searchField = document.getElementById('search');
  let tbody = document.getElementById('tbody');

  form.addEventListener('submit', event => {
    event.preventDefault();
    search(searchField.value, tbody);
  });

});


let search = (query, container) => {
  container.innerHTML = '';
  window.fetch('https://restcountries.com/v3.1/name/' + encodeURIComponent(query))
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
}

