const root = document.querySelector('.root');

const TampilNama = props => {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      backgroundColor: props.bgc
    },
    className: props.className
  }, props.nama);
};

const el = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TampilNama, {
  nama: "kevin",
  bgc: "green",
  className: "text-white"
}), /*#__PURE__*/React.createElement(TampilNama, {
  nama: "kerin",
  bgc: "blue",
  className: "text-white"
}));
ReactDOM.render(el, root);