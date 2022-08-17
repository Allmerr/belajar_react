const root = document.querySelector('.root');

// == cara 1
// const el = (
//     <>
//         <p>kevin</p>
//         <p>kerin</p>
//     </>
// )

// == cara 2
// const tampilNama = (nama)=>{
//     return <p>{nama}</p>
// }

// const el = (
//     <>
//         {tampilNama('kevin')}
//         {tampilNama('kerin')}
//     </>
// )

// == cara 3
const TampilNama = (props)=>{
    return <p className={props.class}>{props.nama}</p>
}

const el = (
    <>
        <TampilNama nama="kevin" class="nama-1"/>
        <TampilNama nama="kerin" class="nama-2"/>
    </>
)


ReactDOM.render(el,root)