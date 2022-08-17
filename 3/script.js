const root = document.querySelector('.root')

const p1 = React.createElement('p', {
    children : 'ini p1'
})

const p2 = React.createElement('p', {
    children :'ini p2'
})


// == ini mengunakan div kosong untuk mengakali berbagai element yang dirender bersamaan

// const divKosong = React.createElement('div', {
//     children : [p1,p2]
// })

// == seberarnya jikalau kita tak mau mengunakan div untuk menrender bersamaan kita bisa gunakan fragment
const frag = React.createElement(React.Fragment, {
    children : [p1,p2]
})

// == dalam react hanya bisa satu node yang dirender
ReactDOM.render(frag,root); 

//== ! tidak bisa

// ReactDOM.render(p2,root);
// ReactDOM.render(p1,root);

