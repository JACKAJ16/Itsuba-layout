//Fetching data from server and getting error
const fetchData = () => {
    axios.get('https://raw.githubusercontent.com/JACKAJ16/test/master/assets/js/json-file.json')
      .then(res => {
        document.getElementsByClassName('input')[0].style.borderColor = 'red';
        document.getElementsByClassName('input')[1].style.borderColor = 'red';
        alert(res.data.data[0].title)})
      .catch(error => console.log(error))
  }

//Setting border color to default
const defaultColor = () => {
  document.getElementsByClassName('input')[0].style.borderColor='#e5e5e5';
  document.getElementsByClassName('input')[1].style.borderColor='#e5e5e5';
  }