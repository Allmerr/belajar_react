const root = document.querySelector('.root');

// == react
// == kelebihan lebih ngampang logika pembuaatan jikalau ingin render tanpa reload setiap detik element
// == kekurangan mungkin mengunkan libary tambah yaitu react

setInterval(()=>{
    const el = (
        <>
            <h1>jam sekarang</h1>
            <span>{new Date().toLocaleTimeString()}</span>
        </>
    )
    ReactDOM.render(el,root)
},1000)

// == vanila js
// == kekurangan lebih susah logika pembuaatan kita buat dulu span nya baru kita tempel
// == kelebihan pure js

// const h1 = `<h1>Jam sekarang</h1>
// <span></span>            
// `
// root.innerHTML = h1;

// setInterval(()=>{
//     document.querySelector('span').innerHTML = new Date().toLocaleTimeString()
// },1000)
