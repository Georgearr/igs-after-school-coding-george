
function Header() {
    const titleStyle = {
        color: "red",
        backgroundColor: "salmon"
    };

    return (
        <>
            <header>
                <div className="logo">
                    <h1 style={titleStyle}>My Company</h1>
                </div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#news">News</a>
                </nav>
                <button>Login</button>
            </header>
        </>
    );
}

export default Header;