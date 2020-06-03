NotebookNation = {
        components: {
            navbar: '<nav class="uk-visible@s uk-navbar-container uk-navbar-transparent uk-margin uk-padding-small" uk-navbar="mode: click"><div class="uk-navbar-left uk-margin-xlarge-left"><img src="assets/logo.png" alt="" class="nn-logo"></a></div><div class="uk-navbar-right uk-margin-large-right"><ul class="uk-navbar-nav nn-navbar"><li class="uk-active"><a href="index.html">Home</a></li><li><a href="blog.html">Blog</a></li><li><a href="#">Event</a></li><li><a href="login.html">Login</a></li><li><a href="signup.html">Signup</a></li></ul></div></nav>',
            mobilenavbar: '<nav class="uk-navbar uk-navbar-container uk-padding-small uk-hidden@s" uk-navbar> <div class="uk-navbar-left uk-margin-large-left"> <a class="uk-navbar-item uk-logo" href="./home"> <img height="" src="./assets/logo.png" width="80px"> </img> </a> </div><div class="uk-navbar-right uk-margin-large-right"> <a class="uk-navbar-toggle" href="#" uk-navbar-toggle-icon="" uk-toggle="target: #nn-mobile-nav"> </a> </div></nav> <div id="nn-mobile-nav" uk-offcanvas="overlay: true" class="uk-animation-slide-right"> <div class="uk-offcanvas-bar nn-mobile-nav uk-width-expand uk-flex uk-flex-column"> <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical "> <li home="" class="uk-active"> <a href="././home"> Home </a> </li><li about-us> <a href="./about"> About us </a> </li><li courses> <a href="./courses"> Courses </a> </li><li gallery> <a href="./gallery"> Gallery </a> </li><li sell> <a href="./sell"> Sell </a> </li><li contact-us=""> <a href="./contact"> Contact us </a> </li></ul> </div><button class="uk-close-large mobile-nav-close" type="button" uk-close="" uk-toggle="target: #nn-mobile-nav"> </button> </div>',
        },
         add: {
            navbar() {
                document.write(NotebookNation.components.navbar)
            },
             mobileNavbar() {
                document.write(NotebookNation.components.mobilenavbar)
            }
        }
    }

 