function Navbar({Toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand d-none d-md-block" href="">Dashboard</a>
      <a className="navbar-brand d-block d-md-none" onClick={Toggle}><i className='bi bi-justify'></i></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1 mb-1 border rounded">
            <a className="nav-link text-white ms-4 ms-lg-0" href="">
              <i className="bi bi-search me-2"></i>
              Search
            </a>
          </li>
          <li className="nav-item mx-1 mb-1 border rounded">
            <a className="nav-link text-white ms-4 ms-lg-0" href="">Account</a>
          </li>
          <li className="nav-item mx-1 mb-1 border rounded">
            <a className="nav-link text-white ms-4 ms-lg-0" href="">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;