const root = document.querySelector('.root');

const App = ()=>{
    const [count,setCount] = React.useState(0);
    return (
        <>
            <button onClick={()=>{
                setCount(count-1)
            }}>-</button>
            <span>{count}</span>
            <button onClick={()=>{
                setCount(count+1)
            }}>+</button>
        </>
    )
}

ReactDOM.render(<App/>,root)
