account.controller('account', function($scope,$http,$route,fileUpload) {
    
    $scope.list = URlAPI + 'account/views/list';
    $scope.activetab = $route.current.$$route.activetab;
    
    
    $("#file_user_cover").on('change',function(){
        setTimeout(function(){
            var fileuser = $scope.myFile_imguser;
            fileUpload.uploadFileToUrl(fileuser);
        }, 1000);


    });
    
    
    $scope.subscriptions = function ()
    {
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/get_account_apps',
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.apps = res.data;
        });         
    }
    
    $scope.subscription_app = function (id)
    {
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/user_subscription_app',
            data: $.param({
                'app' : id
            }),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.subscriptions();
            swal(res.data);
        });         
    }
    $scope.unsubscription_app = function (id)
    {
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/user_unsubscription_app',
            data: $.param({
                'app' : id
            }),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.subscriptions();
            swal(res.data);
        });         
    }
    
    $scope.information = function ()
    {
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/get_account_information',
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.userId = res.data.userId;
            $scope.username = res.data.username;
            $scope.mail = res.data.email;
            $scope.country = res.data.country;
        });        
    }
    
    $scope.saveInfo = function ()
    {
        $('.komicho-input-group > button > i.fa').removeClass('hidden');
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/save_info',
            data: $.param({
                'mail' : $scope.mail,
                'country' : $scope.country,
            }),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $('.komicho-input-group > button > i.fa').addClass('hidden');
            swal(res.data);
        });
    }
    
    $scope.rePassword = function ()
    {
        $('.komicho-input-group > button > i.fa').removeClass('hidden');
        $http({
            method : 'POST',
            url : URlAPI + 'ajax/home/user_re_password',
            data: $.param({
                'old' : $scope.pass_old,
                'new' : $scope.pass_new,
                'new2' : $scope.pass_new2,
            }),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $('.komicho-input-group > button > i.fa').addClass('hidden');
            swal(res.data);
        });
    }
    
});


account.directive('fileModel', ['$parse', function ($parse) {
    return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
            scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
            });
        });
    }
   };
}]);
// We can write our own fileUpload service to reuse it in the controller
account.service('fileUpload',function ($http) {
    this.uploadFileToUrl = function(file){
         var fd = new FormData();
         fd.append('file', file);
         fd.append('name', name);
         $http.post(URlAPI + 'up/photo', fd, {
             transformRequest: angular.identity,
             headers: {'Content-Type': undefined,'Process-Data': false}
         })
        .then(function(response) {
             console.log(response.data);
             $http({
                method : 'POST',
                url : URlAPI + 'up/photo/save',
                data: $.param({
                    file : response.data
                }),
                headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function(res) {
                
            });
        });
     }
 });
