---
title: "Jigsaw is awesome!"
---
@extends('_layouts.master')
@section('title_page', $page->title)

@section('body')
<section class="index">
    <div class="hello">
        <div class="layer">
            <div class="content">
                <h1>كومتشو هاب</h1>
                <p>بناء الخبره الحقيقة من ذو الخبره المتميزه</p>
            </div>
        </div>
    </div>

    <div class="boxs">
        <div class="container">
            <div class="row">
               
                <div class="col-md-4">
                    <div class="box">
                        <img src="assets/assets/resources/img/icons8-open-source-64.png" alt="">
                        <b>محتوي مفتوح المصدر</b>
                        <p>اول محتوي تعليمي في الوطن العربي مفتوح المصدر</p>
                    </div>
                </div>
                   
                <div class="col-md-4">
                    <div class="box">
                        <img src="assets/assets/resources/img/icons8-repository-64.png" alt="">
                        <b>من يكتب</b>
                        <p>يمكنك انت ايضا الكتابة بكل سهولة والانضمام إلى المساهمين</p>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="box">
                        <img src="assets/assets/resources/img/icons8-merge-git-64.png" alt="">
                        <b>المساهمات</b>
                        <p>يتم تسجيل المساهمات من خلال نظام Git فلا حاجة للتعقيد</p>
                    </div>
                </div>
                
            </div>

            <div class="row">

                @foreach ($category as $cat)
                <div class="col-md-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <a href="{{ $cat->_meta->url[0] }}">{{ $cat->title }}</a>
                            <div class="pull-left">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        التصنيفات الفرعية
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-left" role="menu">
                                        @foreach ($subcategory->where('category', $cat->slug) as $scat)
                                        <li>
                                            <a href="{{ $scat->_meta->url[0] }}">{{ $scat->title }}</a>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body text-center">
                        {{ $cat->description }}
                        </div>
                        <!-- /.panel-body -->
                    </div>
                </div>
                @endforeach
                

            </div>
        </div>
    </div>
    
</section>
@stop