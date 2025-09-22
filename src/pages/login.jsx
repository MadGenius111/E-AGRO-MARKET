// src/pages/Login.jsx
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("farmer");
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${role} Login Data:`, credentials);
    // TODO: send login request with role
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          {role === "farmer" ? "Farmer Login" : "Buyer Login"}
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

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
