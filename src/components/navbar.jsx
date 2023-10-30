import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand" style={{ paddingLeft: '15px' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/3208/3208723.png" alt="Logo" width="50" height="50"></img>
        ToDoList
      </h1>
      <nav className="navbar-nav mx-auto">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/todo" className="nav-link">
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
