import { useEffect, useState } from "react";

interface User {
  uid: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  employment: { title: string; key_skill: "string" };
}

function App() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(
        "https://random-data-api.com/api/v2/users?size=20"
      );
      const data = await res.json();
      setUserData(data);
    };

    getUsers();
  }, []);

  return (
    <div className="app">
      <div className="title">
        <h1>Fetch and Display User Data</h1>
        <h4>React Fundamentals Part 2</h4>
      </div>
      <table>
        <thead>
          <tr className="row heading">
            <th></th>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => (
            <tr key={user.uid} className={`row ${i % 2 === 0 ? "even" : ""}`}>
              <td className="number">{i + 1}.</td>
              <td className="cell name">
                {user.first_name} {user.last_name}
              </td>
              <td className="cell">{user.employment.title}</td>
              <td className="cell">{user.email}</td>
              <td className="cell">{user.phone_number.split("x")[0]}</td>
              <td className="cell">{user.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
