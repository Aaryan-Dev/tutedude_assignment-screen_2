import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
// import css from "./my.module.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Body className={css.body} /> */}
      <Body />
    </div>
  );
}

export default App;
