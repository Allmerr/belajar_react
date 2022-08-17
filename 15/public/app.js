const root = document.querySelector('.root');

const App = () => {
  const [penyebut, setPenyebut] = React.useState('dia');
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    console.log(count);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "update"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", null, penyebut), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPenyebut('kamu')
  }, "update"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);