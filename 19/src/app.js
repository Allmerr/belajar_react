const root = document.querySelector('.root');

const App = ()=>{

    const span = React.useRef(null)

    React.useEffect(()=>{
        setTimeout(() => {
            span.current.textContent = new Date().toLocaleTimeString()
        }, 1000);
    })

    return (
        <>
            <h1></h1>
            <span ref={span}>{new Date().toLocaleTimeString()}</span>
        </>
    )
}

ReactDOM.render(<App/>,root)


