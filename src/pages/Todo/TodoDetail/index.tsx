import styles from './todoDetail.module.scss';

type Prop = {
  id?: string;
};

const TodoDetail = ({ id }: Prop) => {
  const editButton = () => {
    console.log('수정');
  };
  const deleteButton = () => {
    alert('정말 삭제하시겠습니까?');
  };

  return (
    <div>
      {id ? (
        <div className={styles.detailDiv}>
          <div className={styles.detailTitleOption}>
            <div className={styles.detailTitle}>{}</div>
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
          <div className={styles.detailContent}>{}</div>
          <div className={styles.detailDate}>{}</div>
        </div>
      ) : null}
    </div>
  );
};

export default TodoDetail;
