import styles from './todoDetail.module.scss';

type Props = {
  title?: string;
  date?: string;
  content?: string;
};

const TodoDetail = ({ title, date, content }: Props) => {
  const editButton = () => {
    console.log('수정');
  };
  const deleteButton = () => {
    alert('정말 삭제하시겠습니까?');
  };

  return (
    <div className={styles.detailDiv}>
      <div className={styles.detailTitleOption}>
        <div className={styles.detailTitle}>{title}</div>
        <div className={styles.detailOption}>
          <button type="button" onClick={editButton}>
            수정
          </button>
          <span>|</span>
          <button type="button" onClick={deleteButton}>
            삭제
          </button>
        </div>
      </div>
      <div className={styles.detailContent}>{content}</div>
      <div className={styles.detailDate}>{date}</div>
    </div>
  );
};

export default TodoDetail;
