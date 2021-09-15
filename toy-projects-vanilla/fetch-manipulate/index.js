const handlFormSubmit = (event) => {
  event.preventDefault();

  const filterData = (data) => {

  };
  const userData = {
    'username': '',
    'avatar': '',
    'location': '',
    'repos': 0
  };

  const form = document.getElementById('ghForm');
  const FD = new FormData(form);

  fetch(`https://api.github.com/users/${FD.get('username')}`)
    .then(res => res.json())
    .then(data => { filterData(data) })
    .catch(error => console.error('Oops... ', error));
};

window.addEventListener('load', () => {

  form.addEventListener('submit', handlFormSubmit);
});