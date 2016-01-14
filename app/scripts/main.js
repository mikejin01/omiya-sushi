$nscdaApp = angular.module("nscdaApp",[])


.controller("nscdaAppController",["$scope","$compile","simpleFactory",function($scope,$compile,simpleFactory){
	 //code here 
     //$scope.customers = simpleFactory.getCustomers();

  	 $scope.title1 = "title";
  	 $scope.title2  = "static value";
  	 $scope.showflag = false ;
  	 $scope.names = [
       {'cap':'John Smith',city:'Phoenix'},
       {'cap':'John Doe',city:'New York'},
       {'cap':'John Doe',city:'San Francisco'}
     ];

     $scope.updateName = function(){
        var newName = {'cap':'newName',city:'newCity'};
        $scope.names.push(newName);
        $scope.showflag = true ;
     };

  	 $scope.updateTitle1 = function(){
  	 	$scope.title1 = "ssdfsdfsd1111"; 
  	 }
  	 $scope.updateTitle2 = function(){
  	 	$scope.title2 = "ssdfsdfsd1111";
  	 }

   
     //this is a extra functdion to  sadfsd
  	 $scope.addBtn = function(){
  	 	$scope.showflag = false;
  	 	var btnMarkUp =$compile("<btn val=20></btn>")($scope);
  	 	//var btnMarkUp = "<btn val=20></btn>";
  	 	angular.element(document.getElementById("holder")).append(btnMarkUp);
  	 }

}]).
directive("jmFind", function (){
	return {
		replace: true,
		restrict: 'C',
		transclue: true,
		scope: {
		    title1: "=",
		    title2: "@"
		},
		template: "<div><p>Two ways binding: {{title1}} <Br/> String Interpolatioin: {{title2}}</p></div>",
		link : function(scope,element,attr){
			console.log(scope);


			element.slides();
		}	
	};
}).
directive("btn",function(){
	return{
		restrict:"E",
		scope: {val  : "@"},
		template: "<button>{{val}}</button>",
		link: function(scope,element,attr){
			element.on("click",function(){
				alert(scope.val);
			});
		}
	}
})


.factory("simpleFactory",function(){
    var factory = {};
    var custerms = [
	    {'name':'John Smith',city:'Phoenix'},
	    {'name':'John Doe',city:'New York'},
	    {'name':'John Doe',city:'San Francisco'}
    ];
    factory.getCustomers = function(){
        return custerms;
    };
    return factory;
}).
directive('hi', function() {
    return {
        template: '<h2>Hi There</h2>',
        replace: true
    };
}).
directive('hello', function() {
    return {
        template: '<h2>Hello There</h2>',
        replace: true
    };
})
.directive('customDirective', function($compile) {
    return {
        template: '<a ng-click="addType(\'hi\')">Add Hi</a><br/><a ng-click="addType(\'hello\')">Add Hello</a><div class="holder">',
        link: function(scope, element, attr) {
            scope.addType = function(type) {
                var el = $compile('<div ' + type + '></div>')(scope);
                $('.holder', element).append(el);
            }
        }
    };
})

;


