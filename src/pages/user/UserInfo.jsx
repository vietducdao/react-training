import React, { useState, useEffect } from "react";
import UserForm from "../../component/userForm";

const UserInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    console.log(`Name has changed to: ${name}`);
    console.log(`Age has changed to: ${age}`);
  }, [name, age]); // dependency array chứa name và age

  // update
  const handleNameChange = (newName) => setName(newName);
  const handleAgeChange = (newAge) => setAge(newAge);

  return (
    <div>
      <UserForm
        name={name}
        age={age}
        onNameChange={handleNameChange}
        onAgeChange={handleAgeChange}
      />
    </div>
  );
};

export default UserInfo;
