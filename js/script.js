const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu zwierząt, świni i jakiejś łasicy czy coś.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg'
    },
    {
        id: 3,
        title: 'Skazani na Shawshank',
        desc: 'Film o życiu w więzieniu',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        id: 4,
        title: 'Forrest Gump',
        desc: 'Nie trzeba mieć wysokiego IQ, żeby mieć ciekawe życie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    }
]
let moviesElements = movies.map(movie => {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.poster, className: 'image'})
    );
});

let element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);
ReactDOM.render(element, document.getElementById('app'));