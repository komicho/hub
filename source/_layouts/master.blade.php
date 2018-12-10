@section('titlePage', $page->baseTitle)
@include('_layouts.partials.header')
    <body>
    @yield('body')
    </body>
@include('_layouts.partials.footer')