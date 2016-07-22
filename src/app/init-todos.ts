export class Init {
	load() {
		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
			console.log('No todos found');
			var todos = [
				{text: 'Surf'},
				{text: 'Do something other then work'},
				{text: 'stop working now.'}
			];

			localStorage.setItem('todos', JSON.stringify(todos));
		} else {
			console.log('found todos');
		}
	}
}