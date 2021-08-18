import "./App.css";
import ItemList from "./component/ItemsList";

function App() {
  let arr = [
    { image: "./camera1.jpeg", name: "cam 1", price: "300$" },
    { image: "./camera2.jpeg", name: "cam2", price: "100$" },
    { image: "./camera3.jpeg", name: "cam3", price: "400$" },
  ];

  return <ItemList items={arr} />;
}

export default App;
