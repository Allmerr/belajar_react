const root = document.querySelector('.root');

/**const App = ()=>{

    const[penyebut,setPenyebut] = React.useState('kamu')

    React.useEffect(()=>{
        setTimeout(() => {
            setPenyebut('aku')
        }, 1000);
    })


    return(
        <>
            <h1>{penyebut}</h1>
        </>
    )

}**/

const App = ()=>{

    const h1 = React.useRef(null)

    React.useEffect(()=>{
        console.log(h1);
        setTimeout(() => {
            h1.current.textContent = 'kamu'
        }, 1000);
    },[])

    return(
        <>
            <h1 ref={h1}>aku</h1>
        </>
    )
}


ReactDOM.render(<App/>,root)


