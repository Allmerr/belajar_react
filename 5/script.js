const root = document.querySelector('.root');


// == terlihat lebih rapih dari biasany tapi ada cara biar lebih keren lagi

// const ul = React.createElement('ul', {
//     className : 'buah-buahan'
// }, React.createElement('li',null,'apel'),
//    React.createElement('li',null,'mangga'),
//    React.createElement('li',null,'jeruk')
// )

// == gunakan jsx
const ul = (
    <ul className="buah-buahan">
        <li>apel</li>
        <li>mangga</li>
        <li>jeruk</li>
    </ul>
)



ReactDOM.render(ul,root)