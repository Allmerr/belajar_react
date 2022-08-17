const root = document.querySelector('.root');

const TampilNama = (props)=> {
    return <p style={{backgroundColor: props.bgc}} className={props.className}>{props.nama}</p>
}

const el = (
    <>
        <TampilNama nama="kevin" bgc="green" className="text-white"/>
        <TampilNama nama="kerin" bgc="blue" className="text-white"/>
    </>
)


ReactDOM.render(el,root)
