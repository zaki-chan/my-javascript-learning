import "./App.css";

// const subject = "React";
function App(props){
  return (
    <>
      <header>
        {/* 中括弧の中にはjavascript式を入れることができる。 */}
        <h1>Hello, {props.subject} !</h1>
        <button type="button" className="primary">Click me!</button>
      </header>
    </>
  );
}

export default App;
