var app=angular.module('myApp',[]);

/*app.controller('mycontrol',function($scope,$http)
{
	$http.get("customer.php").then(function(response)
	{
		$scope.myData=response.data.records;
	});
});*/
app.controller("mycontrol",function($scope,$http)
{
	/*var names=[
	
	{Name:'Gokul',Gender:'Male',Age:25},
	{Name:'Sathish',Gender:'Male',Age:26},
	{Name:'Ilamathi',Gender:'female',Age:45},
	{Name:'Ganesan',Gender:'Male',Age:55}
	]
	$scope.details=names;*/
 
    var url="customer.txt"
    $http.get(url).success(function(response) 
    {
        $scope.records = response;
    });
});

