import React, { useState } from "react";

export default function Phonebook() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!fname.trim() || !lname.trim() || !contact.trim()) {
      alert("Please fill all fields.");
      return;
    }
    const newEntry = { fname, lname, contact };
    setList((prev) => [...prev, newEntry]);
    setFname("");
    setLname("");
    setContact("");
    setFilteredData([]);
  };

  const searchHandler = () => {
    if (!searchData.trim()) {
      alert("Please fill the search field.");
      return;
    }

    const filtered = list.filter(
      (e) =>
        e.fname.toLowerCase().includes(searchData.toLowerCase()) ||
        e.lname.toLowerCase().includes(searchData.toLowerCase()) ||
        e.contact.includes(searchData)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Number"
          maxLength={12}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Search here"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={searchHandler}>Search</button>
      </div>

      <table border="1" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {(filteredData.length > 0 ? filteredData : list).map(
            (item, index) => (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.contact}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
