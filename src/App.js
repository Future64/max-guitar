import Home from "./pages/home/Home";
import "./App.css";
import UserInputContextProvider from "./context/userInputContext";

function App() {
  return (
    <div className="App">
      <UserInputContextProvider>
        <Home />
      </UserInputContextProvider>
    </div>
  );
}

export default App;
