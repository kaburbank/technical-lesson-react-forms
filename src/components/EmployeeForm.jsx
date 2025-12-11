import React, { useState } from "react";

function EmployeeForm({}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="NewItem">
     <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name"/>
      <input type="text" name="role" placeholder="Role Name"/>
      <input type="text" name="password" placeholder="Password"/>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
