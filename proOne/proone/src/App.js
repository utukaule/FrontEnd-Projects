import React, { useState } from "react";
import { data } from "./data.js";

function App() {
  // console.log(data);
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="App">
      <div>
        <h1>Contact Kepper</h1>
      </div>

      <div>
        <form action="">
          <input
            type="text"
            placeholder="Search contacts"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="">
        <table>
          <thead>
            <tr>
              <td>First name</td>
              <td>Last name</td>
              <td>email</td>
              <td>phone</td>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search) || //The includes(search) method then checks if the lowercase first_name includes the search string. 
                      item.last_name.toLowerCase().includes(search) ||
                      item.email.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
