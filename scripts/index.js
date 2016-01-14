$omiyaApp = angular.module("omiyaApp",[])

.controller("nscdaAppController",["$scope","$compile","simpleFactory",function($scope,$compile,simpleFactory){
	 //code here 
  	 $scope.newName = ""
  	 $scope.newAge = ""
  	 $scope.customers = [
       {name:'John Smith',age:21},
       {name:'John Doe',age:32},
       {name:'John Doe',age:16}
     ];

     $scope.updateCustomers = function(){
        var newCustomer = {name:$scope.newName,age:$scope.newAge};
        $scope.customers.push(newCustomer);
     };

}])

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
});







$(function(){
	
	//configuration
	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;
	
	//cache DOM
	var $slider = $("#slider");
	var $slideContainer = $slider.find(".slides");
	var $slides = $slideContainer.find(".slide");
	
	var interval;
	
	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function() {
				currentSlide++;	
				if (currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css("margin-left", 0); 
				}
			});
		}, pause);
	}
	
	function stopSlider() {
		clearInterval(interval);
	}
	
	$slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);
	
	startSlider();
			
});