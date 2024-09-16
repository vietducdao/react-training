import React from "react";

const UserForm = ({ name, age, onNameChange, onAgeChange }) => {
  // Kiểm tra nếu props là hàm
  if (typeof onNameChange !== "function" || typeof onAgeChange !== "function") {
    console.error("onNameChange or onAgeChange is not a function");
  }

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => onAgeChange(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default UserForm;
