import { SVGProps } from 'react';
import styles from './todoItem.module.scss';

type Props = {
  title?: string;
  date?: string;
  content?: string;
};

const TodoItem = ({ title, date, content }: Props) => {
  return (
    <div className={styles.todoComponent}>
      <div className={styles.todoTitleDate}>
        <div className={styles.todoTitle}>{title}</div>
        <div className={styles.todoDate}>{date}</div>
      </div>
      <div className={styles.todoContent}>{content}</div>
    </div>
  );
};

export default TodoItem;
