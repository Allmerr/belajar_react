const root = document.querySelector('.root');

const App = () => {
  const [bool, setBool] = React.useState('aku');
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('helo');
  }, [count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "h1"
  }, bool), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setBool('kamu');
    }
  }, "Ubah aku jadi kamu"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", {
    className: "h1"
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "+"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);