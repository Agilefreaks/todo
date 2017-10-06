define([
  'views/todo_item_list_view',
  'collections/todo_item_collection',
  'ejs'
], function (TodoItemListView, TodoItemCollection) {
	var instance, subject;

  describe('deleteTodoItem', function(){

  	beforeEach(function (){
  		collection = new TodoItemCollection([
				  	{title: 'first', completed: false},
				  	{title: 'second', completed: false}
			  	]);

    	instance = new TodoItemListView({
    		el: $('#todo-list'), 

    		todoItemCollection: collection
    	});

    	subject = function (index) {
      		return instance.deleteTodoItem({target: {id: index}});
    	};
  	});

  	it('will remove item from the collection', function(){
  		subject(index=1);
  		expect(instance.options.todoItemCollection.length).toEqual(1);
  	});

  	/*
  	it('will render without removed id', function(){
  		subject(index=0);
  		console.log(instance.$el.text());
  		expect(instance.$el.text()).toEqual(jasmine.stringMatching(/<input/));
  	});
	*/
  });


});