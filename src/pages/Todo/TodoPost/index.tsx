import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import Axios from '../../../lib/axios';
import styles from './todoPost.module.scss';

type IProps = {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const TodoPost = ({ isChecked, setIsChecked }: IProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const contentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    console.log(content);
  };

  // eslint-disable-next-line consistent-return
  const postContent = async () => {
    try {
      const data = await Axios.post(
        '/todos',
        { title, content },
        { headers: { authorization: localStorage.getItem('jwt') as string } },
      );
      console.log('성공');
      setIsChecked(false);
      return data.data;
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <div className={styles.postDiv}>
      <input className={styles.postTitle} placeholder="제목을 입력하세요" onChange={titleChange} value={title} />
      <textarea
        className={styles.postContent}
        placeholder="내용을 입력하세요"
        onChange={contentChange}
        value={content}
      />
      <div className={styles.buttonDiv}>
        <button className={styles.postButton} type="button" onClick={postContent}>
          추가
        </button>
        <button
          className={styles.postButton}
          type="button"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default TodoPost;
