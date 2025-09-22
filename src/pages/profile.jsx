// src/pages/Profile.jsx
import { useState } from "react";

export default function Profile() {
  const [role, setRole] = useState("farmer");

  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+2348012345678",
    location: role === "farmer" ? "Kaduna, Nigeria" : "Abuja, Nigeria",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          {role === "farmer" ? "Farmer Profile" : "Buyer Profile"}
        </h2>

        {/* Role Toggle */}
        <div className="flex justify-center gap-6 mb-6">
          <label>
            <input
              type="radio"
              value="farmer"
              checked={role === "farmer"}
              onChange={() => setRole("farmer")}
            />
            Farmer
          </label>
          <label>
            <input
              type="radio"
              value="buyer"
              checked={role === "buyer"}
              onChange={() => setRole("buyer")}
            />
            Buyer
          </label>
        </div>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p>
          <strong>{role === "farmer" ? "Farm Location:" : "Address:"}</strong>{" "}
          {user.location}
        </p>

        <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
