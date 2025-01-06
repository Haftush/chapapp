import Home from "./pages/home/Home";
import Login from "./rightbar/login/Login";
import UsernameValidation from "./rightbar/login/UserValidation";
function App() {
  return (
    <div className="App">
      <UsernameValidation />
      <Login />
      <Home />
    </div>
  );
}

export default App;
