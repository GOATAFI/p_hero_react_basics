export const todoData = [
  {
    isDone: true,
    work: "Learn JS",
  },
  {
    isDone: false,
    work: "Learn React",
  },
  {
    isDone: true,
    work: "Learn Angular",
  },
];
function Todo({ isDone, work }) {
  if (isDone) {
    return <h2>{work}</h2>;
  } else {
    return <h2>{work}</h2>;
  }
}

export default Todo;
