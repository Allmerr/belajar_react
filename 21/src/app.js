const root = document.querySelector('.root');

const App = ()=>{

    const inputRef = React.useRef(null)

    React.useEffect(()=>{
        inputRef.current.value = ''
    })

    const funSubmit = (e)=>{
        e.preventDefault()
        const nama = inputRef.current.value
        console.log(`Nama : ${nama}`);
    }

    return(
        <form action="" onSubmit={funSubmit}>
            <div className="form-control">
                <label htmlFor="">Nama : </label>
                <input type="text" placeholder="masukan nama" ref={inputRef}/>
            </div>
            <button>submit</button>
        </form>
    )
}

ReactDOM.render(<App/>,root)


