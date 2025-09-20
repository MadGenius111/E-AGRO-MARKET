import React from 'react';


export default function LoginForm({ onLoggedIn }){
const [identifier,setIdentifier]=React.useState('');
const [password,setPassword]=React.useState('');
const [err,setErr]=React.useState(null);


function submit(e){
e.preventDefault();
if(!identifier || !password){
setErr("Enter both fields");
return;
}
// Simulate login success
onLoggedIn({ username: identifier });
}


return (
<form onSubmit={submit} className="card">
<h3>Login</h3>
{err && <div className="error">{err}</div>}
<input placeholder="Username or Email" value={identifier} onChange={e=>setIdentifier(e.target.value)} />
<input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
<button type="submit">Login</button>
</form>
);
}