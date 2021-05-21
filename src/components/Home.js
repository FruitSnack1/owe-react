import { Route, Switch, useHistory, useRouteMatch } from "react-router"
import { Link } from "react-router-dom";
import FormListing from "./FormListing"
import ListingDetail from "./ListingDetail";
import Listings from "./Listings";
import Profile from "./Profile";
import auth from '../auth/auth'

const Home = () => {
    let { url } = useRouteMatch();
    const history = useHistory()

    const logOut = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div>


            <div id="wrapper">

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <Link to="/app" className="sidebar-brand d-flex align-items-center justify-content-center" >
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Inzeráty</div>
                    </Link>

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item ">
                        <Link className="nav-link" to='/app'>
                            <i className="fas fa-fw fa-list"></i>
                            <span>Inzeráty</span>
                        </Link>
                    </li>
                    <hr className='sidebar-divider d-none d-md-block'></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to='/app/mylistings'>
                            <i className="fas fa-fw fa-list"></i>
                            <span>Moje Inzeráty</span>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to='/app/profile'>
                            <i className="fas fa-fw fa-user"></i>
                            <span>Profil</span>
                        </Link>
                    </li>
                    <div style={{ padding: '1rem' }}>
                        <Link className="btn btn-success btn-sm btn-block" to='/app/create'>
                            <span>Vytvořit nový inzerát</span>
                        </Link>
                    </div>













                </ul>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>



                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a href="/#" className="nav-link dropdown-toggle" id="searchDropdown" role="button"
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


                                <div className="topbar-divider d-none d-sm-block"></div>

                                <li className="nav-item dropdown no-arrow">
                                    <span href="/#" className="nav-link dropdown-toggle" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{auth.getUsername()}</span>
                                        <i onClick={() => logOut()} className='fas fa-sign-out-alt'></i>
                                    </span>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a href="/#" className="dropdown-item" >
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                        <a href="/#" className="dropdown-item" >
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                        <a href="/#" className="dropdown-item" >
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                        <div className="dropdown-divider"></div>
                                        <a href="/#" className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>

                        <div className="container-fluid">
                            <Switch>
                                <Route exact path={`${url}`}>
                                    <Listings owned={false}></Listings>
                                </Route>
                                <Route exact path={`${url}/mylistings`}>
                                    <Listings owned={true}></Listings>
                                </Route>
                                <Route exact path={`${url}/profile`}>
                                    <Profile></Profile>
                                </Route>
                                <Route path={`${url}/create`}>
                                    <FormListing></FormListing>
                                </Route>
                                <Route path={`${url}/edit/:listingId`}>
                                    <FormListing></FormListing>
                                </Route>
                                <Route path={`${url}/:listingId`}>
                                    <ListingDetail></ListingDetail>
                                </Route>
                            </Switch>
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

            <a href="/#" className="scroll-to-top rounded" >
                <i className="fas fa-angle-up"></i>
            </a>



            {/* <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            <script src="js/sb-admin-2.min.js"></script>

            <script src="vendor/chart.js/Chart.min.js"></script>

            <script src="js/demo/chart-area-demo.js"></script>
            <script src="js/demo/chart-pie-demo.js"></script> */}


        </div >
    )
}

export default Home