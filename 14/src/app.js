const root = document.querySelector('.root');

const App = ()=>{
    const [bool , setBool] = React.useState('aku')
    const [count , setCount] = React.useState(0)
    React.useEffect(()=>{
        console.log('helo');
    },
    [count])
    return (
        <>
            <h1 className="h1">{bool}</h1>
            <button onClick={()=>{
                setBool('kamu')
            }}>Ubah aku jadi kamu</button>
            <br/>
            <h1 className="h1">{count}</h1>
            <button onClick={()=>{
                setCount(count + 1)
            }}>+</button>
        </>
    )
}

ReactDOM.render(<App/>,root)