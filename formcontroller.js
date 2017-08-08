var app=angular.module('Myapp',['ngMaterial','ngMessages']);

app.controller('formctrl',function($scope)
{
	$scope.submitted=false;

	$scope.submitForm=function()
	{
		$scope.submitted=true;

		if($scope.userForm.$valid)
		{
			alert('OK');		
		}

		else
		{
			alert('Error');
		}
	};
	$scope.reset=function()
	{
 	$scope.name="";
 	$scope.username="";
 	$scope.email="";
 	$scope.number="";
};
});   
      