function Header() {
  return (
    <header className="navbar">
      <img
        className="icon"
        alt="Twitch Logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ksEU8lXNmDjE6rNrZPcjR_JdeLYiDUv9Vw&usqp=CAU"
      />
      <p>Twitch</p>
      <input className="search" type="text" />
      <img
        className="icon user-thumb"
        alt="User thumbnail"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ksEU8lXNmDjE6rNrZPcjR_JdeLYiDUv9Vw&usqp=CAU"
      />
    </header>
  );
}

export default Header;
