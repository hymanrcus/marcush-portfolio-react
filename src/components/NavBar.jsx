function NavBar() {
    return (
        <header className="App-header">
        <nav>
            <Link className="App-link" to="/">Marcus Hyman</Link>
            <Link className="App-link" to="/about">About Me</Link>
            <Link className="App-link" to="/contact">Contacts</Link>
            <Link className="App-link" to="/projects">Projects</Link>
        </nav>
        </header>
    )
}

export default NavBar;