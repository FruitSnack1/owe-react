import { Route, Switch, useRouteMatch } from "react-router"
import { Link } from "react-router-dom";
import FormListing from "./FormListing"
import Listings from "./Listings";
import NotFound from "./NotFound";
import Profile from "./Profile";

const Home = () => {
    let { url } = useRouteMatch();
    return (
        <div>


            <div id="wrapper">

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <Link to="/app" className="sidebar-brand d-flex align-items-center justify-content-center" >
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Ineráty</div>
                    </Link>

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item ">
                        <Link className="nav-link" to='/app'>
                            <i className="fas fa-fw fa-list"></i>
                            <span>Inzeráty</span>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to='/app/profile'>
                            <i className="fas fa-fw fa-user"></i>
                            <span>Profil</span>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to='/app/create'>
                            <i className="fas fa-fw fa-list"></i>
                            <span>Moje Inzeráty</span>
                        </Link>
                    </li>













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
                                    <a href="/#" className="nav-link dropdown-toggle" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg" alt='' />
                                    </a>
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
                            <Link to={`${url}/create`}>create</Link>
                            <Switch>
                                <Route exact path={`${url}`}>
                                    <Listings></Listings>
                                </Route>
                                <Route exact path={`${url}/create`}>
                                    <FormListing></FormListing>
                                </Route>
                                <Route exact path={`${url}/profile`}>
                                    <Profile></Profile>
                                </Route>

                            </Switch>
                        </div>

                    </div>

                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2020</span>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>

            <a href="/#" className="scroll-to-top rounded" >
                <i className="fas fa-angle-up"></i>
            </a>

            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a href="/#" className="btn btn-primary" >Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            <script src="js/sb-admin-2.min.js"></script>

            <script src="vendor/chart.js/Chart.min.js"></script>

            <script src="js/demo/chart-area-demo.js"></script>
            <script src="js/demo/chart-pie-demo.js"></script>


        </div >
    )
}

export default Home