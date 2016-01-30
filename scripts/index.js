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
     $scope.imageList = [
     	{src:'http://images.indagare.com/wp-content/uploads/20150826160328/R-New-York-City-o-ya-04Kyoto-Style-Morel-Mushroom-Nigiri-by-Gentl-and-Hyers-620x413.jpg'},
     	{src:'http://images.indagare.com/wp-content/uploads/20150826160325/R-New-York-City-o-ya-02Fried-Kumamoto-Oyster-by-Gentl-and-Hyers-620x413.jpg'},
     	{src:'http://images.indagare.com/wp-content/uploads/20150826160327/R-New-York-City-o-ya-03Hamachi-Nigiri-with-Banana-Pepper-by-Gentl-and-Hyers-620x413.jpg'}
     ];

     $scope.updateCustomers = function(){
        var newCustomer = {name:$scope.newName,age:$scope.newAge};
        $scope.customers.push(newCustomer);
     };

}])

/*.directive('sliderDirective', function($compile) {
    return {
        template: '<a ng-click="addType(\'hi\')">Add Hi</a><br/><a ng-click="addType(\'hello\')">Add Hello</a><div class="holder">',
        link: function(scope, element, attr) {
            scope.addType = function(type) {
                var el = $compile('<div ' + type + '></div>')(scope);
                $('.holder', element).append(el);
            }
        }
    };
})*/

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
})

.directive("slider",function(){
    return{
    	restrict: 'A',
    	link: function(scope,element,attrs){
    	
	    	//configuration
	    	var width = 900;
			var width = 900;
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
				if (currentSlide === 4) {
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

	        jQuery(element).click(function(){
	            alert($slides.length);        
	        });
         
      }
    }
        
  })

;

