import { createSlice } from "@reduxjs/toolkit";
import profile from "../../assets/profilePlaceholder.svg";

const initialState = {
  tasks: [
    {
      id: "col1",
      colTitle: "title1",
      color: "#f0ffff",
      cards: [
        {
          id: "card1",
          title: "crad1",
          description: "card1 description",
          assignUsers: [
            {
              id: 2,
              name: "Mahdi Toosi",
              role: "Frontend Developer",
              imageURL: profile,
            },
            {
              id: 3,
              name: "Morteza Erfani",
              role: "Frontend Developer",
              imageURL: profile,
            },
          ],
          todos: [
            {
              name: "todo 1",
              isDone: false,
            },
          ],
          label: [
            {
              name: "urgent",
              color: "red",
            },
          ],
          deadline: new Date("2023-4-18").getTime(),
        },
      ],
    },
    {
      id: "col2",
      colTitle: "title2",
      color: "#9bbcbc",
      cards: [
        {
          id: "card2",
          title: "card2",
          description: "card2 description",
          assignUsers: [
            {
              id: 1,
              name: "Yousef Mohammadiani",
              role: "Backend Developer",
              imageURL: profile,
            },
            {
              id: 2,
              name: "Mahdi Toosi",
              role: "Frontend Developer",
              imageURL: profile,
            },
          ],
          todos: [
            {
              name: "todo 2",
              isDone: false,
            },
          ],
          label: [
            {
              name: "ASAP",
              color: "maroon",
            },
          ],
          deadline: new Date("2023-2-28").getTime(),
        },
      ],
    },
  ],
  showAddCard: {
    id: null,
    isShow: false,
  },
  members: [
    {
      id: 1,
      name: "Yousef Mohammadiani",
      role: "Backend Developer",
      imageURL: profile,
    },
    {
      id: 2,
      name: "Mahdi Toosi",
      role: "Frontend Developer",
      imageURL: profile,
    },
    {
      id: 3,
      name: "Morteza Erfani",
      role: "Frontend Developer",
      imageURL: profile,
    },
  ],
};

const saveToStorageRedux = () => {
  localStorage.setItem("tasks", JSON.stringify(initialState.tasks));
};

export const tasksDetailsSlice = createSlice({
  name: "tasksDetailsSlice",
  initialState,
  reducers: {
    addCol: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        colTitle: action.payload.title,
        color: action.payload.color,
        cards: [],
      });
      saveToStorageRedux();
    },
    saveToStorage: () => {
      localStorage.setItem("tasks", JSON.stringify(initialState.tasks));
    },
    getFromStorage: (state) => {
      const previousData = JSON.parse(localStorage.getItem("tasks"));
      if (previousData) {
        state.tasks = previousData;
      }
    },
    todoHandler: (state, action) => {
      const colIndex = state.tasks.findIndex(
        (col) => col.id === action.payload.colId
      );
      const cardIndex = state.tasks[colIndex].cards.findIndex(
        (card) => card.id === action.payload.cardId
      );
      state.tasks[colIndex].cards[cardIndex].todos[
        action.payload.index
      ].isDone = action.payload.isDone;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      // saveToStorageRedux();
      console.log(action.payload.isDone);
      console.log(colIndex);
      console.log(cardIndex);
      console.log(
        state.tasks[colIndex].cards[cardIndex].todos[action.payload.index]
          .isDone
      );
      // console.log(action.payload.cardId);
      // console.log(action.payload.index);
    },
  },
});

export const { addCol, saveToStorage, getFromStorage, todoHandler } =
  tasksDetailsSlice.actions;
export default tasksDetailsSlice.reducer;
