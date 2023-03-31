const initialData = {
	tasks: {
		'task-1': { id: 'task-1', header: 'Stanislav Semenyich', content: 'Consectetur adipiscing elit.' },
		'task-2': { id: 'task-2', header: 'Vladimir Ilyich Ulyanov', content: 'Nullam sit amet diam pretium, ullamcorper erat imperdiet, hendrerit est.' },
		'task-3': { id: 'task-3', header: 'Karl Von Marx', content: 'Lorem ipsum dolor sit amet!' },
		'task-4': { id: 'task-4', header: 'Artyom', content: 'Rhoncus fermentum.' },
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
		},
		'column-2': {
			id: 'column-2',
			title: 'In Progress',
			taskIds: [],
		},
		'column-3': {
			id: 'column-3',
			title: 'Done',
			taskIds: [],
		},
		'column-4': {
			id: 'column-4',
			title: 'Live Build',
			taskIds: [],
		},
	},
	// Facilitate reordering of the columns
	columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;
