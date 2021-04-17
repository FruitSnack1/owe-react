import { Link } from "react-router-dom"

const Root = () => {
    return (
        <>
            <div id="wrapper">

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <Link to='/' className="sidebar-brand d-flex align-items-center justify-content-center" >
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Inzeráty</div>
                    </Link>

                    <hr className="sidebar-divider my-0"></hr>

                </ul>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="/#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                <li className="nav-item dropdown no-arrow">
                                    <Link to='/login' className='btn btn-primary mr-2'>Přihlášení</Link>
                                </li>
                                <li className="nav-item dropdown no-arrow">
                                    <Link to='/register' className='btn btn-light'>Registrace</Link>
                                </li>

                            </ul>

                        </nav>

                        <div className="container-fluid">

                            <h3 className='text-primary'>Aplikace na téma inzeráty</h3>

                        </div>

                    </div>

                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Studentský zápočtový projekt | Tomáš Rýzner</span>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>
        </>
    )
}

export default Root