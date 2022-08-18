import { useState } from "react";
import Register from "./register"
import './sass/main.css'


function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Register setUser={setUser} />

    </div>
  );
}

export default App;
