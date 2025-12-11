import React, { useState } from "react";

function EmployeeForm({}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="NewItem">
     <input type="text" name="firstName" placeholder="First Name" onChange = {(e)=>setFirstName(e.target.value)} />
      <input type="text" name="lastName" placeholder="Last Name" onChange = {(e)=>setLastName(e.target.value)} />
      <input type="text" name="role" placeholder="Role Name" onChange = {(e)=>setRole(e.target.value)} />
      <input type="text" name="password" placeholder="Password" onChange = {(e)=>setPassword(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
