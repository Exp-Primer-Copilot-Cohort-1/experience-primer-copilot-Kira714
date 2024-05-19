// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// 
// 
// Path: comments.html
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <h1>Comments</h1>
//     <div ng-app="commentsApp" ng-controller="CommentsController">
//         <div ng-repeat="comment in comments">
//             <h3>{{comment.name}}</h3>
//             <p>{{comment.body}}</p>
//         </div>
//     </div>
//     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
//     <script src="comments.js"></script>
// </body>
// </html>
// 
// Path: comments.js
// function commentsController($scope, $http) {
//     $http.get('comments.json').success(function(data) {
//         $scope.comments = data;
//     });
// }
// 
// 
// Path: comments.json
// [
//     {
//         "name": "John Doe",
//         "body": "I love AngularJS!"
//     },
//     {
//         "name": "Jane Doe",
//         "body": "I love learning AngularJS!"
//     }
// ]
// 
// 
// Path: style.css
// h1 {
//     color: blue;
// }
// 
// 
// Path: server.js
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream('comments.html').pipe(res);
// });
// server.listen(3000);
// 
// 
// Command to run server.js:
// node server.js
// 
// 
// Now, open the browser and navigate to http://localhost:3000. You should see the comments from the comments.json file.
// 
// 
// Note: In the comments.html file, the ng-app directive is used to define the root element of the AngularJS application. The ng-controller directive is used to define the controller for the comments. The ng-repeat directive is used to iterate over the comments array and display each comment.
// 
// The commentsController function is defined in the comments.js