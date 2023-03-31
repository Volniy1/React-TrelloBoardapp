import { configureStore } from '@reduxjs/toolkit'
import kanban from './kanban/kanban'

export default configureStore({
	reducer: {
		kanban
	}
})