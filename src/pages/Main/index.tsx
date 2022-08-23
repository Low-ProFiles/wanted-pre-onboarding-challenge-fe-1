import { useState } from 'react';
import TodoDetail from '../../component/TodoDetail';
import TodoItem from '../../component/TodoItem';
import TodoPost from '../../component/TodoPost';
import styles from './main.module.scss';
import { PlusButton } from '../../assets/svgs';

const Main = () => {
  const [isChecked, setIsChecked] = useState(false);
  const title = '에바';
  const date = '2022.08.23';
  const content = '내용';

  const postButton = () => {
    console.log('추가');
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.mainBody}>
      <div className={styles.toDoDiv}>
        <span className={styles.headText}>List</span>
        <TodoItem title={title} date={date} content={content} />
      </div>
      <div className={styles.toDoDiv}>
        <span className={styles.headText}>Detail</span>
        <TodoDetail title={title} date={date} content={content} />
      </div>
      <div className={styles.toDoDiv}>
        <span className={styles.headText}>Post</span>
        {isChecked ? (
          <TodoPost />
        ) : (
          <>
            <TodoItem />
            <div className={styles.plusButton}>
              <PlusButton onClick={postButton} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
