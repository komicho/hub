@section('titlePage', $page->title.' | '.$page->baseTitle)
@include('_layouts.partials.header')
    
    <body>
        <section class="content">
            <div class="hello" style="background-image: url(../../../assets/assets/resources/img/background-text.jpg);">
                <div class="layer">
                    <div class="content">
                        <h2>{{ $page->title }}</h2>
                        <!-- <p><span><i class="fa fa-user" aria-hidden="true"></i> <a href="#">كريم محمد</a></span> <span><i class="fa fa-bookmark" aria-hidden="true"></i> <a href="#">لارافيل</a></span></p> -->
                    </div>
                </div>
            </div>
            <div class="content-list">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <!-- .content-view -->
                            <div class="content-view">
                                @yield('body')
                            </div>
                            <!-- ./content-view -->
                            @include('_layouts.partials.comment')
                        </div>
                        <div class="col-md-4">
                            <div class="categorys-box">
                                <div class="title">الاقسام</div>
                                <div class="category">
                                    <ul>
                                        @foreach($category as $cat)
                                        <li><a href="{{ $cat->_meta->url[0] }}">{{ $cat->title }}</a></li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>

                            <!-- <div class="categorys-box">
                                <div class="title">المساهمين</div>
                                <div class="category">
                                    <div class="media" ng-repeat="contributor in contributors">
                                        <div class="media-left" style="padding:0px 0px 0px 10px">
                                            <img class="media-object" ng-src="https://avatars.githubusercontent.com/u/contributor.author.id" style="width: 55px;height: auto;">
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">contributor.author.name</h4>
                                            contributor.message
                                            <p><i>contributor.date | date:'yyyy-MM-dd'</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
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