import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import styled from 'styled-components';
import './App.css'

// import initialData from './Components/initial-data';
import Column from './Components/Column';
import Nav from './Components/Nav/nav';
import LoginPopUp from './Components/Login-PopUp';
import RegistrationPopUp from './Components/Registration-PopUp';
import { setState } from './Components/store/kanban/kanban';
import AddColumnForm from './Components/addColumnForm/AddColumnForm';
import Task from './Components/Task';
import TaskPopUp from './Components/TaskPopUp';
import { useState } from 'react';


const Main = styled.main`
  transition: height 0.1s ease;
  background-image: linear-gradient( 180deg,rgb(223 113 18 / 87%) 11.2%,rgb(1 0 40 / 75%) 88.5% );
  min-height: 100vh;
  height: 100%;
`
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`

const App = () => {
  const state = useSelector(state => state.kanban)
  const dispatch = useDispatch()

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return

    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };
      dispatch(setState(newState))
    }


    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (finish && start && start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      dispatch(setState(newState))
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    dispatch(setState(newState))



  };

  const onClickAddCard = (colID) => (header, content) => {
    if (header < 50 || !header) return


    const colIdValue = state.columns[colID].id
    const colTitle = state.columns[colID].title
    const colTasks = state.columns[colID].taskIds

    const taskId = `task${uuid()}`
    const taskData = {
      id: taskId,
      header,
      content,
    }
    const newState = {
      ...state,
      tasks: {
        ...state.tasks,
        [taskId]: taskData,
      },
      columns: {
        ...state.columns,
        [colID]: {
          id: colIdValue,
          title: colTitle,
          taskIds: [...colTasks, taskId]
        },

      }
    };
    console.log(colTasks);


    dispatch(setState(newState))

  }

  const onAddColumn = (title) => {
    if (!title) return
    console.log(title);
    const newColID = `column-${uuid()}`
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColID]: {
          id: newColID,
          title: title,
          taskIds: []
        }
      },
      columnOrder: [...state.columnOrder, newColID]

    }
    console.log(newState);
    dispatch(setState(newState))
  }

  const DeleteColumn = (colID) => () => {

    const columns = { ...state.columns }
    delete columns[colID]
    const newColumnOrder = state.columnOrder.filter(value => value !== colID)
    const newState = {
      ...state,
      columns: columns,
      columnOrder: newColumnOrder
    }
    console.log(setState(newState));
    dispatch(setState(newState))
  }

  const DeleteTask = (colID, taskID) => () => {
    console.log(colID, taskID);

    const tasks = { ...state.tasks }
    // const { [taskID]: deletedTask, ...newTasks } = tasks
    delete tasks[taskID]
    const newTasksIds = state.columns[colID].taskIds.filter(value => value !== taskID)

    const newState = {
      ...state,
      tasks,
      columns: {
        ...state.columns,
        [colID]: {
          ...state.columns[colID],
          taskIds: newTasksIds
        }
      }
    }
    document.getElementById('task-pop-up').style.height = "0";
    document.getElementById('task-pop-up').style.opacity = "0";
    dispatch(setState(newState))

  }


  const [taskInfo, setTaskInfo] = useState('undefined')
  const [columnInfo, setColumnInfo] = useState('undefined')

  const onClick = (card, column) => {
    console.log(card, column);
    setTaskInfo(card)
    setColumnInfo(column)
    document.getElementById('task-pop-up').style.height = "100vh";
    document.getElementById('task-pop-up').style.opacity = "1";
    return (taskInfo, columnInfo)
  }
  console.log(columnInfo.id);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TaskPopUp id={taskInfo.id} header={taskInfo.header} content={taskInfo.content} onDeleteTask={DeleteTask(columnInfo.id, taskInfo.id)} />
      <LoginPopUp />
      <RegistrationPopUp />
      <Droppable
        droppableId='all-columns'
        direction='horizontal'
        type='column'>
        {(provided) => (
          <Main className="main"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Nav />
            <ColumnContainer>
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
                return (
                  <Column
                    key={column.id}
                    column={column}
                    index={index}
                    onClickAddCard={onClickAddCard(column.id)}
                    onClickDeleteColumn={DeleteColumn(column.id)}

                  >
                    {tasks.map((task, index) => (
                      <Task key={task.id} task={task} index={index} onTaskEdit={() => onClick(task, column)} onDoubleClick={() => onClick(task, column)} />
                    ))}
                  </Column>
                )
              })}
              {provided.placeholder}
              <AddColumnForm onAddColumn={onAddColumn} />
            </ColumnContainer>
          </Main>
        )}
      </Droppable>
    </DragDropContext>
  );
}




export default App