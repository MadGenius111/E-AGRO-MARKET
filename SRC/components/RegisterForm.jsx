import React from 'react';


export default function RegisterForm({ onRegistered }){
const [username,setUsername]=React.useState('');
const [email,setEmail]=React.useState('');
const [password,setPassword]=React.useState('');
const [err,setErr]=React.useState(null);


function submit(e){
e.preventDefault();
if(!username || !email || !password){
setErr("All fields required");
return;
}
// Simulate registration success
onRegistered({ username, email });
}


return (
<form onSubmit={submit} className="card">
<h3>Register</h3>
{err && <div className="error">{err}</div>}
<input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
<input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
<input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
<button type="submit">Register</button>
</form>
);
}