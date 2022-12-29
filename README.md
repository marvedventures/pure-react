# Pure React App (React Element)

This is a Pure React App created using React.createElement()

## Table of contents


- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## My process

### Built with

- [React API](https://unpkg.com/react@18.0.0-rc.0/umd/react.development.js)
- [ReactDOM API](https://unpkg.com/react-dom@18.0.0-rc.0/umd/react-dom.development.js)

### What I learned

An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

The object representation of React Element would be as follows:

```

const App = () => {
return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { className: "title", key: "1" },
      "React is Rendered"
    ),
}
```

The above React.createElement() function returns an object:

```
{
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          className: 'title'
          children: 'React is Rendered'
        }
      }
    ]
    }
  }
}
```

And finally it renders to the ReactDOM v18 using:

```
 ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
```

Output: 
```
<div>
  <h1 class='title'>React is Rendered</h1>
</div>

```


### Useful resources

- [Component vs Element](https://www.geeksforgeeks.org/what-is-the-difference-between-element-and-component/) - This helped me for understanding the difference between Components vs Elements


## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
