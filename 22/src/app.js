const root = document.querySelector('.root');

// const App = ()=>{

//     const inputRef = React.useRef(null)

//     const funSubmit = (e)=>{
//         e.preventDefault()
//         const nama = inputRef.current.value
//         console.log(`Nama : ${nama}`);
//         inputRef.current.value = ''
//     }

//     return(
//         <form action="" onSubmit={funSubmit}>
//             <div className="form-control">
//                 <label htmlFor="">Nama : </label>
//                 <input type="text" placeholder="masukan nama" ref={inputRef}/>
//             </div>
//             <button>submit</button>
//         </form>
//     )
// }


const App = ()=>{

    const sub = (e)=>{
        e.preventDefault();
        console.log(`nama : ${nama}`);
        setNama('')
    }

    const[nama,setNama] = React.useState('');

    return(
        <form action="" onSubmit={sub}>
            <div className="input-control">
                <label htmlFor="">Nama : </label>
                <input type="text" placeholder="masukan nama..." value={nama} onChange={(e)=>setNama(e.target.value)} />
            </div>
            <button>ganti</button>
        </form>
    )
}

ReactDOM.render(<App/>,root)


