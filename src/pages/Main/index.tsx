import { useState } from 'react';
import TodoDetail from '../Todo/TodoDetail';
import TodoPost from '../Todo/TodoPost';
import styles from './main.module.scss';
import { PlusButton } from '../../assets/svgs';
import TodoItem from '../Todo/TodoItem';
import TodoList from '../Todo/TodoList';

const Main = () => {
  const [isChecked, setIsChecked] = useState(false);

  const postButton = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.mainBody}>
      <div className={styles.scrollDiv}>
        <div className={styles.listDiv}>
          <span className={styles.headText}>List</span>
          <TodoList / >
        </div>
      </div>
      <div className={styles.toDoDiv}>
        <span className={styles.headText}>Detail</span>
        <TodoDetail />
      </div>
      <div className={styles.toDoDiv}>
        <span className={styles.headText}>Post</span>
        {isChecked ? (
          <TodoPost isChecked={isChecked} setIsChecked={setIsChecked} />
        ) : (
          <>
            <TodoItem />
            <PlusButton onClick={postButton} />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
