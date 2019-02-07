@section('titlePage', $page->title.' | '.$page->baseTitle)
@include('_layouts.partials.header')
    <body>
        <section class="content">
            <div class="hello" style="background-image: url(../../../assets/images/media/covers/{{ $page->cover }});">
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
                                @if($post->published == true)
                                <li>
                                    <h2><a href="{{ $post->_meta->url[0] }}">{{ $post->title }} - {{ $post->static }}</a></h2>
                                </li>
                                @endif
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