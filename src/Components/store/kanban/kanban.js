import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: {
		'task-1': {
			id: 'task-1', header: 'do something', content: 'it will take no more than 1 minutes'
		},
		'task-2': {
			id: 'task-2', header: 'do something new 2', content: 'it will take no more than 2 minutes'
		},
		'task-3': {
			id: 'task-3', header: 'do something new 3', content: 'it will take no more than 3 minutes'
		},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			taskIds: ['task-1', 'task-2', 'task-3'],
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

const kanbanSlice = createSlice({
	name: 'kanban',
	initialState,
	reducers: {
		setState: (state, { payload }) => {
			state.columnOrder = payload.columnOrder
			state.tasks = payload.tasks
			state.columns = payload.columns
		}
	}
})

const { actions, reducer } = kanbanSlice;
export const {
	setTasks,
	setColumns,
	setColumnOrder,
	setState
} = actions
export default reducer;

