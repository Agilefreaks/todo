define([
  'collections/todo'
], function (ToDoCollection) {
  var toDoProvider;

  function ToDoProvider() {
    var toDos = undefined;

    this.getAllToDos = function () {
      return toDos || (toDos = new ToDoCollection());
    };
  }

  ToDoProvider.instance = function () {
    return toDoProvider || (toDoProvider = new ToDoProvider());
  };

  return ToDoProvider;
});
