import React from 'react'

const Navbar = () => {
    return(
        <nav class="navbar w-100 p-0" id="nav1">
            <div class="row">
                <div class="d-none d-sm-block col-lg-2 col-md-3 col-sm-4 col-xs-12">
                    <a class="btn border-0" href="/"><img src='logo.png' alt='CentroVergara Logo' id='logo'/></a>
                </div>

                <div class="d-block d-sm-none col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <a class="d-flex justify-content-center align-items-center btn border-0" href="/"><img src='logo.png' alt='CentroVergara Logo' id='logo-mini'/></a>
                </div>

                <div class="col-lg-2 col-md-1 col-sm-0 col-xs-0"></div>

                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <a class="d-flex justify-content-center align-items-center btn h-100 border-0 navbar-button" href="/appoint">APPOINTMENTS</a>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <a class="d-flex justify-content-center align-items-center btn h-100 border-0 navbar-button" href="/audio">AUDIOS</a>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <a class="d-flex justify-content-center align-items-center btn h-100 border-0 navbar-button" href="/about">ABOUT</a>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <a class="d-flex justify-content-center align-items-center btn h-100 border-0 navbar-button" href="/contact">CONTACT</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar