import { useState } from "react";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <>
      {userName ? (
        <Chat userName={userName} />
      ) : (
        <Login setUserName={setUserName} />
      )}
    </>
  );
}

export default App;
