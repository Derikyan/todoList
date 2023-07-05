import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAll, addTask, updateTask, deleteTask } from './todoAPI';

const initialState = {
  todoList: [],
  loading: false,
};

export const getAll = createAsyncThunk(
  'todo/getAll',
  async () => {
    const response = await fetchAll();
    return response.todos;
  }
);

export const addNewTask = createAsyncThunk(
  'todo/addTask',
  async (value) => {
    const response = await addTask(value);
    return response;
  }
);

export const changeComplete = createAsyncThunk(
  'todo/changeTask',
  async (data) => {
    const response = await updateTask(data);
    return response;
  }
);

export const deleteComplete = createAsyncThunk(
  'todo/delete',
  async (id) => {
    const response = await deleteTask(id);
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.loading = false;
      })
      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(deleteComplete.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter((task)=>{
          return task.id !== action.payload.id;
        })
      });
  },
});

export const selectAll = (state) => state.todo.todoList;
export const selectLoading = (state) => state.todo.loading;

export default counterSlice.reducer;
