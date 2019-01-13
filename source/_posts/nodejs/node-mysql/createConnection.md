---
extends: _layouts.post
section: body
title: الاتصال بقاعده البيانات من خلال nodeJs
date: 2018-12-07 01:29:07
author: Karim Mohamed
category: nodejs
subcategory: nodejs-mysql
---
بسم الله .. اليوم نتعرف على اتصال nodeJs مع قواعد البيانات من نوع mySql .. تحتاج الى تركيب xampp لتشغيل للاتصال بقواعد البيانات او استخدام mysql ولكن اليوم انا اتحدث فقط عن ربط الاتصال وتثبيت حزمه mySql فى مشروعك

## تركيب الحزمه
`npm install mysql@2.10.2 -g`

لماذا -g نستخدم هذا الجزء من الامر لتثبيت الحزمه على الحسوب بشكل عام ويمكنك استخدام --s للتثبيت داخل مجلد مشروعك فقط .. قم بعمل ملف باسم app.js

## استدعاء الحزمه
```javascript
var mysql = require('mysql');
```

## كتابه معلومات الاتصال
```javascript
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'name data'
});
```
وبعد كتاب معلومات السيرفر الان نحتاج الى الاتصال

## اجراء الاتصال
```javascript
connection.connect();
```
وبهذا السطر انت الان قمت بالاتصال بقاعده البيانات

## التاكد من الاتصال
```javascript
connection.connect(function(err){
    if(err){
        console.log('Error connecting to db');
        return;
    }else{
        console.log('Connection to db');
    }
});
```
اذا كان هناك خطأ في الاتصال بقاعده البيانات سوف يظهر " Error connecting to db " وان لم يكن هناك اى خطأ في معلومات الاتصال تظهر " Connection to db " .. قم بتشغيل البرنامج من خلال

`npm app.js`