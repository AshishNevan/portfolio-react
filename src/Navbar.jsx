import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar h-16 flex space-x-4 items-center justify-between pr-4 pl-4">
      <p className="logo">Ashish Nevan</p>
      <div className="menu flex justify-evenly gap-x-4 p-4">
          <a>Home</a>
          <a>About</a>
          <a>Contacts</a>
      </div>
    </nav>
  );
}

export default Navbar;
