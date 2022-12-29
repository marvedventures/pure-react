const Person = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: "child1" }, props.name),
    React.createElement("p", { key: "child2" }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { className: "title", key: "1" },
      "React is Rendered"
    ),
    React.createElement(
      Person,
      {
        name: "Marvin",
        occupation: "Full-Stack Developer",
        key: "2",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Miguel",
        occupation: "Digital Artist",
        key: "3",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Joanna",
        occupation: "Dentist",
        key: "4",
      },
      null
    ),
  ]);
};

ReactDOM.createRoot(document.getElementById("root")).render(App());
