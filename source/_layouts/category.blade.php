<html>
    <head>
        <title>كومتشو هاب</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ $page->baseUrl }}assets/assets/resources/styles.css">
        <script src="{{ $page->baseUrl }}assets/dist/all.js"></script>
        <link rel="shortcut icon" type="image/png" href="./favicon.ico"/>
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
    
    <body>
        <section class="content">
            <div class="hello">
                <div class="layer">
                    <div class="content">
                        <h1>{{ $page->title }}</h1>
                        <p>{{ $page->description }}</p>
                    </div>
                </div>
            </div>
            <div class="content-list">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <!-- .content-box -->
                            <ol class="content-box">
                                @foreach ($posts->where('category', $page->getFilename()) as $post)
                                <li>
                                    <h2><a href="{{ $post->_meta->url[0] }}">{{ $post->title }}</a></h2>
                                </li>
                                @endforeach
                            </ol>
                            <!-- ./content-box -->
                        </div>
                        <div class="col-md-4">
                            <div class="categorys-box">
                                <div class="title">الاقسام</div>
                                <div class="category">
                                    <ul>
                                        @foreach($category as $cat)
                                        <li ng-repeat="sub in categorie.subs"><a href="{{ $cat->_meta->url[0] }}">{{ $cat->title }}</a></li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    </body>
   <footer>
        <div class="footer">
            <img src="{{ $page->baseUrl }}assets/assets/resources/img/logo.png" alt="">
            <b>جميع الحقوق محفوظة - 2018</b>
        </div>
    </footer>
    <script src="{{ $page->baseUrl }}assets/dist/core.js"></script>
</html>