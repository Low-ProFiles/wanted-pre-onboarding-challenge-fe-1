import { useState } from 'react';
import Axios from '../../../lib/axios';
import TodoDetail from '../TodoDetail';
import styles from './todoItem.module.scss';

type Props = {
  title?: string;
  createdAt?: string;
  content?: string;
  id?: string;
};

const TodoItem = ({ title, createdAt, content, id }: Props) => {
  // eslint-disable-next-line consistent-return
  const getTodoById = async () => {
    try {
      const res = await Axios.get(`/todos/${id}`, {
        headers: { authorization: localStorage.getItem('jwt') as string },
      });
      const usingData = res.data.data;
      console.log(usingData)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.todoComponent} onClick={getTodoById}>
      <div className={styles.todoTitleDate}>
        <div className={styles.todoTitle}>{title}</div>
        <div className={styles.todoDate}>{createdAt}</div>
      </div>
      <div className={styles.todoContent}>{content}</div>
    </div>
  );
};

export default TodoItem;
