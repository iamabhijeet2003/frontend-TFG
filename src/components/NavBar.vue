<template>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" />    
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <nav class="navbar navbar-expand-xl navbar-light">
                            <div class="container-fluid">
                                <a href="#" class="navbar-brand"><i class="bi bi-shop h2 text-white"></i></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav mx-auto">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/products">Productos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Ofertas</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Liquor
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Cider</a></li>
                                                <li><a class="dropdown-item" href="#">Mead</a></li>
                                                <li><a class="dropdown-item" href="#">Others</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            
                                            <button class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Ver todo... 
                                                </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                        </div>
                        <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 col-md-3">
                        <div class="header-search mt-2">
                            <div class="search-form">
                                <form method="get">
                                    <div class="input-group">
                                        <div class="select-style">
                                            <select name="order">
                                                <option class="topshow" value="1">All</option>
                                                <option value="a">Beer</option>
                                                <option value="b">Wine</option>
                                                <option value="c">Liquor</option>
                                                <option value="d">Cider</option>
                                                <option value="e">Mead</option>
                                                <option value="f">Others</option>
                                            </select>
                                        </div>
                                        <input type="text" name="search" id="search" class="form-control" placeholder="Search Here" />
                                        <div class="input-group-addon">
                                            <button type="submit"><i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 cart-login">
                        <div class="float-end cart">
                            <a href="#">
                                
                                
                                <button type="button" class="btn btn-light mt-2"><span><i class="bi bi-cart"></i>Cart</span></button>
                            </a>
                        </div>

                        <div class="float-end me-5">
                            <button type="button" class="btn btn-light mt-2">Login</button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </header>

    
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
        header {
            background-color: #2196F3;
            padding: 10px 15px;
        }
        header nav .navbar-nav .nav-link {
            color: #efefef !important;
            font-size: 18px;
            font-weight: 500;
            padding: 0px 18px !important;
        }
        header .navbar-brand {
            max-width: 200px;
        }


        /* Header Search Bar */
        .header-search input[type="text"] {
            border: none;
        }
        .header-search .input-group-addon button {
            color: #fff;
            background: #ef2d2c;
            padding: 10px 15px;
            border: none;
            font-size: 12px;
        }
        .select-style {
            width: auto;
            padding: 0;
            margin: 0;
            display: inline-block;
            vertical-align: middle;
        }
        .select-style select {
            width: 100%;
            background: #efefef;
            color: #000;
            height: 38px;
            padding: 0px 9px;
            border: none;
            outline: none;
        }
        .select-style select option.topshow {
            padding: 10px 0;
            position: relative;
            top: 15px;
        }
        /* End Header Search Bar */


        /* Header cart CSS */
        header .cart a {
            color: #fff;
            text-decoration: none;
        }
        header .cart {
            position: relative;
            left: -15px;
        }
        header .cart a span.number {
            position: relative;
            left: 38px;
            top: -4px;
            color: #ef2d2c;
        }
        header .cart a span.number {
            position: relative;
            left: 38px;
            top: -4px;
            color: #ffffff;
        }
        header .cart a {
            color: #fff;
            text-decoration: none;
        }
        /* End Header cart CSS */


        /* choose store checkbox CSS */
        header [type="radio"]:checked + label,
        header [type="radio"]:not(:checked) + label {
            position: relative;
            padding-left: 5px;
            cursor: pointer;
            line-height: 20px;
            display: inline-block;
            color: #fff;
            font-family: "Conv_VisueltPro-Regular";
            font-size: 14px;
        }


        /* Responsive CSS */
        @media (max-width: 991px) {
            header .cart a img {
                width: 30px;
                margin-left: 10px;
            }
            header .cart a span.number {
                left: 40px;
                top: -7px;
                font-size: 14px;
            }
            header {
                padding: 10px 0px;
            }
            .cart-login {
                position: absolute;
                right: 70px;
            }
            header .navbar-brand {
                max-width: 150px;
            }
        }
        </style>