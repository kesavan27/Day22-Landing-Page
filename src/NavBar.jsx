function NavBar() {
    const handleSignUpClick = () => {
        const formField = document.getElementsByClassName('btn');
        formField.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={{ padding: '0px', backgroundColor: '#F4C2C2' }}>
            <a className="navbar-brand" style={{ marginLeft: '2%' }} href="/">
                VK&apos;s EdTech
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/faq">
                            Live Courses <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/use-cases">
                            Recorded Courses <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/blog">
                            Placements<span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/newsletter">
                            Contact <span className="sr-only">(current)</span>
                        </a>
                    </li>
                </ul>
                <button onClick={handleSignUpClick} className="cart alert alert-dark cart" style={{ marginTop: '2%', marginBottom: '2%', marginRight: '2%', background: 'black', color: 'white' }}>
                    Sign up for Free
                </button>
            </div>
        </nav>

        <hr></hr>
        </>
    );
}

export default NavBar;