

var app = angular.module('TodoApp', []);

app.controller('TodoCtrl', TodoCtrl);

//this scope is only available inside this controller.
function TodoCtrl($scope) {

    $scope.todos = [];
    $scope.todo = {};
    $scope.name = 'Nina';
    $scope.date = new Date();

//local storage
 //$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: '', complete: false}, {text: '', complete: false} ];
   //localStorage.setItem('todos', JSON.stringify($scope.todos));


// end of local storage


    $scope.onSubmit = function(todo) {
      if(todo.title != '') {
      $scope.todos.push(angular.copy(todo));
      todo.title = '';
// local storage
      //localStorage.setItem('todos', JSON.stringify($scope.todos));
      }
  };
  $scope.onRemove = function(todo){
    for (var i=0; i < $scope.todos.length; i++){
      if ($scope.todos[i].title == todo.title){
        $scope.todos.splice(i, 1);
      }
    }
  }
  
  
  $scope.editorEnabled = false;
  
  $scope.enableEditor = function(todo) {
    $scope.editorEnabled = true;
    $scope.editableTitle = $scope.todo.title;
  };
  
  $scope.disableEditor = function(todo) {
    $scope.editorEnabled = false;
  };
  
  $scope.save = function(todo) {
    $scope.todo = $scope.editableTitle;
    $scope.disableEditor(todo);
  }

//local storage function 

  /*$scope.archive = function(todo) {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo){
      if (!todo.complete)
        $scope.todos.push(todo);
    });
    localStorage.setItem('todo', JSON.stringify($scope.todos));
  };
}*/

}




