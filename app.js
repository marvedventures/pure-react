const Person = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is Rendered"),
    React.createElement(
      Person,
      {
        name: "Marvin",
        occupation: "Full-Stack Developer",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Miguel",
        occupation: "Digital Artist",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Joanna",
        occupation: "Dentist",
      },
      null
    ),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
