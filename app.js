var app = angular.module('phonebook', []);

app.controller('PhonebookController', ['$scope', '$http',
    function($scope, $http){
    $http.get('data.json').success(function (data){
        $scope.persons=data;
    });
        
  $scope.view='list';
}]);

app.directive('pbPersonCard', [function(){  
    return {
         restrict: 'E', 
         scope: {
            person: '='
         },
         templateUrl: 'partials/person-card.html'
    };
}]);