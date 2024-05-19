function skillsMember()
{
    return {
        restrict: 'E',
        templateUrl: 'modules/members/skills.html',
        controller: function($scope, $http) {
            $http.get('modules/members/skills.json').success(function(data) {
                $scope.skills = data;
            });
        }
    };
    }
}