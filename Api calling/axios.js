// ---> axios get method
axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))