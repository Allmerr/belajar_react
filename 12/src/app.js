const root = document.querySelector('.root');

// const el = <button className="btn">click me!</button>
// document.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('btn')){
//         console.log('helo');
//     }
// })

// ===

// const el = <button onClick={function(){
//     console.log('helo')
// }}>click me</button>

// ===

// const funBtn = (msg)=> console.log(msg);
// const el = <button onClick={funBtn.bind(this,'helo')}>click me</button>

// ===


const el = <button id="btn">click me</button>
document.addEventListener('click', (e)=>{
    if(e.target.getAttribute('id') == 'btn'){
        e.target.innerHTML = 'helo' 
    }
})


ReactDOM.render(el,root)
