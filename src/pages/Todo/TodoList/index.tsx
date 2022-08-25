import { useEffect, useState } from 'react';
import Axios from '../../../lib/axios';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line consistent-return
  const getTodos = async () => {
    try {
      const res = await Axios.get('/todos', { headers: { authorization: localStorage.getItem('jwt') as string } });
      const usingData = res.data.data;
      setData(usingData);
      return setData;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTodos();
  }, [data]);

  return (
    <div>
      {data.map((items: any) => (
        <TodoItem title={items.title} createdAt={items.createdAt} content={items.content} id={items.id} />
      ))}
    </div>
  );
};

export default TodoList;
