class TodoForm extends React.Component {

	_handleSubmit (event) {
		event.preventDefault();

		let task = this._task;
		let description = this._description;

		this.props.addTodo(task.value, description.value);
	}

	render () {
		return (
			<section className="col-xs-12 col-md-6">
				<form onSubmit={this._handleSubmit.bind(this)}>
					<div className="form-group">
						<label htmlFor="task">Task</label>
						<input id="task" className="form-control" type="text" placeholder="Task" name="task" ref={(input) => this._task = input}/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea id="description" className="form-control" name="description" placeholder="Description" ref={(textarea) => this._description = textarea}/>					
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</section>
		);
	}
}

class TodosSection extends React.Component {
	render () {
		const todos = this.props.getTodos();

		return (
			<section className="col-xs-12 col-md-6">
				{todos}
			</section>
		);
	}
}

class Todo extends React.Component {
	render () {
		return (
			<article className="card text-center">
				<div className="card-header">
					{this.props.task}
				</div>
				<p className="card-text">
					{this.props.description}				
				</p>
			</article>
		);
	}
}

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			todos: []
		};
	}

	_getTodos() {
		return this.state.todos.map((todo) => {
			return (
				<Todo key={todo.id} task={todo.task} description={todo.description} />
			);
		})
	}

	_addTodo (task, description) {
		const todo = {
			id: this.state.todos.length + 1,
			task,
			description
		};

		this.setState({todos: this.state.todos.concat([todo])});
	}

	render() {
		return (
			<div className="row">
				<TodoForm addTodo={this._addTodo.bind(this)} />
				<TodosSection getTodos={this._getTodos.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(
		React.createElement(App, null, null),
		document.getElementById('root')
);