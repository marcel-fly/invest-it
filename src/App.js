import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header />
      <List />
    </div>
  );
}

export default App;
