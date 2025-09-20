import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import './styles.css';


export default function App(){
const [token, setToken] = React.useState(localStorage.getItem('token'));
const [user, setUser] = React.useState(localStorage.getItem('user'));


function handleLogin(userObj){
setToken("demo-token");
setUser(userObj.username);
localStorage.setItem('token', "demo-token");
localStorage.setItem('user', userObj.username);
}


function handleLogout(){
localStorage.removeItem('token');
localStorage.removeItem('user');
setToken(null);
setUser(null);
}


return (
<div className="container">
<h1>E-AgroMarket</h1>
{!token ? (
<div className="auth-forms">
<RegisterForm onRegistered={handleLogin} />
<LoginForm onLoggedIn={handleLogin} />
</div>
) : (
<>
<div className="welcome">Welcome, {user}! <button onClick={handleLogout}>Logout</button></div>
<ProductList />
</>
)}
</div>
);
}