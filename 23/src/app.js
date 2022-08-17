const root = document.querySelector(".root");
// https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}

const App = () => {
    const [foods, updateFoods] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [search, updateSeacrh] = React.useState("egg");
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const getData = async () => {
            const reg = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
            const res = await reg.json();
            if (res.meals == null) {
                console.log("tidak ada");
                setError(true);
            } else {
                updateFoods(res);
                setIsLoading(false);
                setError(false);
            }
        };
        getData();
    }, [search]);

    if (error == true) {
        return (
            <>
                <h1>not found</h1>
                <input type="text" placeholder="egg" />
                <button
                    onClick={() => {
                        updateSeacrh(document.querySelector("input").value);
                    }}
                >
                    search
                </button>
            </>
        );
    }

    return (
        <>
            <h1>masakan dengan bahan dapur mu!</h1>
            <input type="text" placeholder="egg" />
            <button onClick={() => updateSeacrh(document.querySelector("input").value)}>search</button>
            {}
            {isLoading ? (
                <p>loading...</p>
            ) : (
                <ul>
                    {foods.meals.map((food) => (
                        <li>{food.strMeal}</li>
                    ))}
                    {console.log(foods)}
                </ul>
            )}
        </>
    );
};

ReactDOM.render(<App />, root);
