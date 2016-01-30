angular.module("demoApp",[])
   .controller("homeCtrl",["$scope",function($scope){
       $scope.title = "Learn about AngularJS Directives";
       $scope.friends = [
         {
           id:1,
           firstName : "Tory",
           lastName : "Patrick",
           age :  33,
           twieets : [
             {id : 1, text : "Lorem Pulum 1"},
             {id : 2, text : "Lorem Pulum 2"},
             {id : 3, text : "Lorem Pulum 3"}
             
           ]
         },
         {
           id:2,
           firstName : "Laura",
           lastName : "Stern",
           age :  33,
           twieets : [
             {id : 1, text : "Lorem Pulum 11"},
             {id : 2, text : "Lorem Pulum 12"},
             {id : 3, text : "Lorem Pulum 13"}
             
           ]
         }
       ];                    
                           
                           
                           
 }])
  .directive("contactCard",function(){
    return{
      restrict : "EAC",  //E 
      scope:{
        friend: "=",   //= two ways bindings @string interpolated & function
        title: "="
      },
      template: "<div><h1>{{title}}</h1><h2>{{friend.firstName}} {{friend.lastName}}</h2><div ng-transclude></div></div>",
      transclude: true,
      replace:true,
      //tempalteUrl : "templates/dd.html",
      //no Denpency Injection
     // controller: function($scope){ 
        //console.log($scope.friend); 
      //},
      link: function(scope,element,attrs){
         jQuery(element).click(function(){
               console.log(attrs);       
         });
         scope.$watch("lives",function(lives){
            
         });
        //oberserver  $watch
      }
    }  
  })

  
  





;