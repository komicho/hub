const URlAPI = 'http://localhost:8000/';
app.controller('app', function($scope, $http, fileUpload, alertify) {
    
    $scope._EditCoInfo = true;
    $scope.add_co_infos = true;
    $scope.add_co_projects = false;
    $scope.add_co_team = false;
    $scope.add_co_rss = false;
    
    $scope._listProject = true;
    $scope._addProject = false;
    $scope.active_listProject = true;
    
    $scope._listTeam = true;
    $scope._addTeam = false;
    $scope.active_listTeam = true;
    
    $scope._listRss = true;
    $scope._addRss = false;
    $scope.active_listRss = true;
    
    $scope.showEditCoInfo = function ()
    {
        $scope.add_co_infos = true;
        $scope.add_co_projects = false;
        $scope.add_co_team = false;
        $scope.add_co_rss = false;
        // active
        $scope._EditCoInfo = true;
        $scope._EditCoProjects = false;
        $scope._EditCoTeam = false;
        $scope._EditCoRss = false;
    }
    
    $scope.showEditCoProjects = function ()
    {
        $scope.add_co_infos = false;
        $scope.add_co_projects = true;
        $scope.add_co_team = false;
        $scope.add_co_rss = false;
        // active
        $scope._EditCoInfo = false;
        $scope._EditCoProjects = true;
        $scope._EditCoTeam = false;
        $scope._EditCoRss = false;
    }
    
    $scope.showEditCoTeam = function ()
    {
        $scope.add_co_infos = false;
        $scope.add_co_projects = false;
        $scope.add_co_team = true;
        $scope.add_co_rss = false;
        // active
        $scope._EditCoInfo = false;
        $scope._EditCoProjects = false;
        $scope._EditCoTeam = true;
        $scope._EditCoRss = false;
    }
    
    $scope.showEditCoRss = function ()
    {
        $scope.add_co_infos = false;
        $scope.add_co_projects = false;
        $scope.add_co_team = false;
        $scope.add_co_rss = true;
        // active
        $scope._EditCoInfo = false;
        $scope._EditCoProjects = false;
        $scope._EditCoTeam = false;
        $scope._EditCoRss = true;
    }
    
    $scope.listProject = function ()
    {
        $scope._listProject = true;
        $scope._addProject = false;
        //
        $scope.active_listProject = true;
        $scope.active_addProject = false;
    }
    $scope.addProject = function ()
    {
        $scope._listProject = false;
        $scope._addProject = true;
        //
        $scope.active_listProject = false;
        $scope.active_addProject = true;
        
        delete $scope.add_project.id;
    }
    
    $scope.editProject = function (data)
    {
        $scope._listProject = false;
        $scope._addProject = true;
        
        $scope.active_listProject = false;
        $scope.active_addProject = false;
        
        console.log(data);
        $scope.add_project = {
            id: data.id,
            title: data.title,
            icon: data.icon,
            about: data.about,
        };
    }
    
    $scope.tabListTeam = function ()
    {
        $scope._listTeam = true;
        $scope._addTeam = false;
        //
        $scope.active_listTeam = true;
        $scope.active_addTeam = false;
    }
    $scope.tabAddTeam = function ()
    {
        $scope._listTeam = false;
        $scope._addTeam = true;
        //
        $scope.active_listTeam = false;
        $scope.active_addTeam = true;
    }
    
    $scope.tabListRss = function ()
    {
        $scope._listRss = true;
        $scope._addRss = false;
        //
        $scope.active_listRss = true;
        $scope.active_addRss = false;
    }
    $scope.tabAddRss = function ()
    {
        $scope._listRss = false;
        $scope._addRss = true;
        //
        $scope.active_listRss = false;
        $scope.active_addRss = true;
    }
    
//    $scope.allData = {
//        "info": {
//            "name": "Facebook",
//            "url": "facebook",
//            "site": "https://www.facebook.com/",
//            "specialization": "Specialization",
//            "headquarters": "Headquarters",
//            "establishment": "Establishment",
//            "about": "About company",
//        },
//        "projects": [
//            {
//                "project_title": "sdlsjdl",
////                "project_icon": "sdlsjdl",
//                "project_about": "sdlsjdl",
//            }
//        ]
//    };

    $scope.editInfo = function ()
    {
        $scope.allInfo.logo = $scope.erere;
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/edit_info',
            data: $.param($scope.allInfo),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
    }
    
    $scope.saveProject = function ()
    {
        if ( $scope._icon_project ){
            $scope.add_project.icon = $scope._icon_project;
        } else {
            $scope.add_project.icon = $scope.add_project.icon;
        }
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/save_project',
            data: $.param($scope.add_project),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
    }
    
    $scope.addTeam = function ()
    {
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/add_team',
            data: $.param($scope.add_team),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
    }
    
    $scope.addRss = function ()
    {
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/add_rss',
            data: $.param($scope.add_rss),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
    }

    
    $("#file_imguser").on('change',function(){
        setTimeout(function(){
            fileUpload.uploadFileToUrl(BASEURL + '/upload', $scope.file, function(data){
                $scope.erere = data.data.data;
            });
        }, 100);
    });
    
    $("#icon_project").on('change',function(){
        setTimeout(function(){
            fileUpload.uploadFileToUrl(BASEURL + '/upload/project', $scope.icon_project, function(data){
                $scope._icon_project = data.data.data;
                $scope.add_project.icon = data.data.data;
            });
        }, 100);
    });
    
    $("#com_url").on('change', function(){
        console.log( $(this).val() );
    });
    
    
    //////////////////////////////////////////////////////////////////////////
    $scope.makeAlert = function(data)
    {
        if ( data.status == true ) {
            alertify.maxLogItems(3).delay(5000).success(data.message);
        } else if ( data.status == false ) {
            alertify.maxLogItems(3).delay(5000).error(data.message);
        } else {
            alertify.maxLogItems(3).delay(5000).log(data.message);
        }
        
    }
    
    $scope.addNew = function ()
    {
        $scope.allData.logo = $scope.erere;
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/add_new',
            data: $.param($scope.allData),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
    }
    
    //////////////////////////////////////////////// sign
    $scope.signUp = function()
    {
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/sign_up',
            data: $.param($scope.user),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
        
    }
    $scope.signIn = function()
    {
        if ( !$scope.user ) {
            $scope.user = {
                email: '',
                password: '',
            };
        }
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/sign_in',
            data: $.param($scope.user),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
        
    }
    
    //////////////////////////////////////////////// job
    $scope.jobAdPublisher = function()
    {
        $http({
            method : 'POST',
            url : BASEURL + '/ajax/job/add',
            data: $.param($scope.jobAd),
            headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function(res) {
            $scope.makeAlert(res.data);
        });
    }
});