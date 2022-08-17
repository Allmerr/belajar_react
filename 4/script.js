const root = document.querySelector('.root');


// == cara lama

// const li1 = React.createElement('li', {
//     children : 'apel',
//     className : 'buah'
// })

// const li2 = React.createElement('li', {
//     children : 'mangga',
//     className : 'buah'
// })

// const li3 = React.createElement('li', {
//     children : 'jeruk',
//     className : 'buah'
// })

// const ul = React.createElement('ul', {
//     children : [li1 , li2 , li3],
//     className : 'buah-buahan'
// })

// == cara keren

const ul = React.createElement('ul', {
    className : 'buah-buahan'
}, React.createElement('li',null,'apel'),
   React.createElement('li',null,'mangga'),
   React.createElement('li',null,'jeruk')
)

ReactDOM.render(ul,root)