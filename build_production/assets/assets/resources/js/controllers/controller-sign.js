app.controller('sign', function($scope,$http) {
    
    $('#email').focus(function () {
        $('#username').val($('#username').val().replace(' ', '_'));
    });
    
    // login
    $scope.login = function ()
    {
        $('i.fa-fw').removeClass('hidden');
        var data = {
            'user' : $scope.username,
            'pass' : $scope.pass,
        };
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/login',
            data: $.param(data),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $('i.fa-fw').addClass('hidden');
            if (res.data == true) {
               location.href = URlAPI;
            } else {
                swal(res.data);
            }
        });
    }
    // next
    $scope.next = function ()
    {
        var data = {
            'username' : $scope.username,
            'email' : $scope.email,
        };
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/count_user_mail',
            data: $.param(data),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            if (res.data == 'done') {
               $scope.next = false;
            } else {
                swal(res.data);
            }
        });
    }
    // registration
    $scope.registration = function ()
    {
        $('i.fa-fw').removeClass('hidden');
        var data = {
            'username' : $scope.username,
            'email' : $scope.email,
            'pass' : $scope.pass,
            're_pass' : $scope.re_pass,
            'country' : $scope.country,
        };
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/registration',
            data: $.param(data),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $('i.fa-fw').addClass('hidden');
            swal(res.data);
        });
    }
});