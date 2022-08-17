const root = document.querySelector('.root');

const App = ()=>{

    const [isLogin,setIsLogin] = React.useState(false);


    return (
        <>
            {isLogin ? <h1>silahkan logout</h1>:<h1>silahkan login</h1>}
            <button onClick={()=> {(!isLogin) ? setIsLogin(true):setIsLogin(false)}}>{!isLogin?'login':'logout'}</button>
        </>
    )
}


ReactDOM.render(<App/>,root)


