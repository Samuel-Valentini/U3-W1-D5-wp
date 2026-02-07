import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./App.css";

import { hello } from "./component/constants";
console.log(hello);

function App() {
    return (
        <>
            {" "}
            <div className="index">
                {/* <!-- navbar start --> */}

                <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark netflix-nav py-0">
                            <div className="container-fluid px-0">
                                <a
                                    className="navbar-brand d-flex align-items-center me-4"
                                    href="#">
                                    <span>
                                        <img
                                            src="/assets/img/netflix_logo.png"
                                            alt="Netflix Logo"
                                            className="logo"
                                        />
                                    </span>
                                </a>

                                <button
                                    className="navbar-toggler border-0"
                                    id="mini-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#mainNav">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div
                                    className="collapse navbar-collapse"
                                    id="mainNav">
                                    <ul className="navbar-nav align-items-lg-center gap-lg-2">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active fw-semibold"
                                                href="#">
                                                TV Shows
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Movies
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Recently Added
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                My List
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="ms-auto d-flex align-items-center gap-3 py-2 py-lg-0">
                                        <a
                                            className="nav-icon"
                                            href="#"
                                            aria-label="Search">
                                            <i className="bi bi-search"></i>
                                        </a>
                                        <a
                                            className="nav-link kids-link d-none d-lg-inline"
                                            href="#">
                                            KIDS
                                        </a>
                                        <a
                                            className="nav-icon"
                                            href="#"
                                            aria-label="Notifications">
                                            <i className="bi bi-bell-fill"></i>
                                        </a>

                                        <a
                                            className="d-flex align-items-center gap-2 text-decoration-none"
                                            href="#">
                                            <img
                                                className="avatar"
                                                src="/assets/img/avatar.png"
                                                alt="profile"
                                            />
                                            <i className="bi bi-caret-down-fill text-white-50 small"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* <!-- navbar end --> */}
                </header>
                {/* <!-- div necessario per creare spazio dinamico quando si apre il menù con schermi piccoli --> */}
                <div id="menu-space"></div>

                <main>
                    <section className="container">
                        <div className="row mb-3">
                            <div className="col">
                                <div className="row align-items-center justify-content-start flex-nowrap">
                                    <h1 className="text-white col text-nowrap">
                                        TV Shows
                                    </h1>
                                    <div className="dropdown col">
                                        <button
                                            className="btn btn-secondary dropdown-toggle rounded-0 bg-black py-0 fs-6"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Genres
                                        </button>
                                        <ul className="dropdown-menu rounded-0 bg-black">
                                            <li>
                                                <a
                                                    className="dropdown-item text-white"
                                                    href="#">
                                                    All
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item text-white"
                                                    href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item text-white"
                                                    href="#">
                                                    Fantasy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-end">
                                <div
                                    className="btn-group rounded-0"
                                    role="group"
                                    aria-label="View toggle">
                                    <button
                                        type="button"
                                        className="btn btn-outline-light rounded-0">
                                        <i className="bi bi-list"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-light rounded-0">
                                        <i className="bi bi-grid-3x3-gap-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row p-0">
                            <div className="col text-white fw-semibold mb-2">
                                Trending Now
                            </div>
                        </div>
                        <div className="row justify-content-start mb-4">
                            <div className="col col-12">
                                <div
                                    id="carouselFirst"
                                    className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media0.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media1.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media2.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media3.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media4.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media5.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media7.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media8.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media9.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media10.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media11.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media12.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media13.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media14.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media15.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media16.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media17.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media18.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselFirst"
                                        data-bs-slide="prev">
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden">
                                            Previous
                                        </span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselFirst"
                                        data-bs-slide="next">
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden">
                                            Next
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-white fw-semibold mb-2">
                                Watch It Again
                            </div>
                        </div>
                        <div className="row justify-content-start mb-4">
                            <div className="col col-12">
                                <div
                                    id="carouselSecond"
                                    className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media18.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media19.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media20.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media21.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media22.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media23.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media24.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media25.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media26.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media27.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media28.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media29.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media30.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media31.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media32.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media4.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media6.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media8.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselSecond"
                                        data-bs-slide="prev">
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden">
                                            Previous
                                        </span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselSecond"
                                        data-bs-slide="next">
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden">
                                            Next
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-white fw-semibold mb-2">
                                New Releases
                            </div>
                        </div>
                        <div className="row justify-content-start mb-4">
                            <div className="col col-12">
                                <div
                                    id="carouselThird"
                                    className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media31.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media30.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media29.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media28.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media27.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media26.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media25.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media24.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media23.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media22.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media21.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media20.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row gap-1 flex-nowrap">
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media19.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media18.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media17.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media16.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media15.jpg"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col col-6 col-sm-4 col-md-2 p-0">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/media/media14.webp"
                                                            className="d-block w-100"
                                                            alt="a movie"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselThird"
                                        data-bs-slide="prev">
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden">
                                            Previous
                                        </span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselThird"
                                        data-bs-slide="next">
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden">
                                            Next
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="footer-netflix py-5 text-secondary text-center text-md-start w-50 mx-auto">
                    <div className="container text-secondary">
                        <div className="d-flex gap-3 mb-4 text-center text-lg-start justify-content-center justify-content-md-start">
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="Twitter">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="YouTube">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 text-secondary">
                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Audio and Subtitles
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Media Center
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Privacy
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Audio Description
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Investor Relations
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Legal Notices
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Help Center
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Jobs
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Cookie Preferences
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Gift Cards
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Terms of Use
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Corporate Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Bottom --> */}
                        <div className="mt-4">
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm rounded-0 px-3">
                                Service Code
                            </button>

                            <div className="small text-secondary mt-3">
                                © 1997-2019 Netflix, Inc.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
