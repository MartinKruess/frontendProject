import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5501/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>{user.firstname}</p>
      ))}
    </>
  );
}

export default App;
