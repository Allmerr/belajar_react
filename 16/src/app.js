const root = document.querySelector('.root');

/**const App = ()=>{

    const [isLogin,setIsLogin] = React.useState(false);

    if(isLogin){
        return (
            <>
                <h1>silahkan logout</h1>
                <button oncClick={()=> setIsLogin(false)}>logout</button>
            </>
        )    
    }

    return (
        <>
            <h1>silahkan login</h1>
            <button onClick={()=> setIsLogin(true)}>login</button>
        </>
    )
}**/


const App = ()=>{

    const [posisi,setPosisi] = React.useState('bogor');

    React.useEffect(()=>{
        document.querySelector('input').value = ''
    })

    return (
        <>
            <h1>Posisi sekarang di {posisi}</h1>
            <input type="text" placeholder="Masukan tempat sekarang"/>
            <button onClick={()=>setPosisi(document.querySelector('input').value)}>Change</button>
        </>
    )

}

ReactDOM.render(<App/>,root)


