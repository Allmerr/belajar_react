const root = document.querySelector('.root');

const buahBuahan = ['apel','mangga','jeruk','semangka']

const App = ()=>{
    return(
        <ul>
            {buahBuahan.map(buah=>{
                return <li key={buah}>{buah}</li>
            })}
        </ul>
    )
}

ReactDOM.render(<App/>,root)


