import axios from "axios";

const baseUrl = "https://todo-list-backend-ibzk.onrender.com";

const getAllToDo = async (setToDo) => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log("data -->", data);
    setToDo(data);
  } catch (err) {
    console.error(err);
  }
};

const addToDo = async (text, setText, setToDo) => {
  try {
    const { data } = await axios.post(`${baseUrl}/save`, { text });
    console.log(data);
    setText("");
    getAllToDo(setToDo); // Fetch all todos to update the state
  } catch (err) {
    console.error(err);
  }
};

const updateToDo = async (toDoId, text, setToDo, setText, setIsUpdating) => {
  try {
    const { data } = await axios.post(`${baseUrl}/update`, {
      _id: toDoId,
      text,
    });
    console.log(data);
    setText("");
    setIsUpdating(false);
    getAllToDo(setToDo); // Fetch all todos to update the state
  } catch (err) {
    console.error(err);
  }
};

const deleteToDo = async (_id, setToDo) => {
  try {
    const { data } = await axios.post(`${baseUrl}/delete`, { _id });
    console.log(data);
    getAllToDo(setToDo); // Fetch all todos to update the state
  } catch (err) {
    console.error(err);
  }
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
