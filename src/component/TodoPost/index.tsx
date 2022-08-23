import styles from './todoPost.module.scss';

const TodoPost = () => {
  return (
    <div className={styles.postDiv}>
      <input className={styles.postTitle} placeholder="제목을 입력하세요" />
      <textarea className={styles.postContent} placeholder="내용을 입력하세요" />
      <button className={styles.postButton} type="button">
        추가
      </button>
    </div>
  );
};

export default TodoPost;
