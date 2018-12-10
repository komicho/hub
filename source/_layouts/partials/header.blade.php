<html>
    <head>
        <title>@yield('titlePage')</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:title" content="@yield('titlePage')" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="{{ $page->getUrl() }}" />
        <meta property="og:image" content="{{ $page->baseUrl }}assets/images/og_image.png" />
        <meta property="article:author" content="{{ $page->author }}" />
        
        <link rel="stylesheet" href="{{ $page->baseUrl }}assets/assets/resources/styles.css">
        <script src="{{ $page->baseUrl }}assets/dist/all.js"></script>
        <link rel="shortcut icon" type="image/png" href="./favicon.ico"/>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130772689-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-130772689-1');
        </script>

    </head>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- <a class="navbar-brand" href="#"><i class="fa fa-building" aria-hidden="true"></i></a> -->
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#/">الصفحة الرئيسية</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>