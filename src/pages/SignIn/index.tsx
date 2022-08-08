import styles from './signin.module.scss';
import Axios from '../../lib/axios';
import { SetStateAction, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const emailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const passWordChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPassWord(e.target.value);
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await loginReqeust();
      localStorage.setItem('jwt', res.token);
      alert('로그인 완료');
      navigate('/');
    } catch {
      console.log('로그인 에러', e);
    }
    setEmail('');
    setPassWord('');
  };

  // eslint-disable-next-line consistent-return
  const loginReqeust = async () => {
    try {
      const login = await Axios.post('/users/login', {
        email,
        password,
      });
      return login.data;
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      alert('이미 로그인 되었습니다.');
      navigate('/');
    }
  }, );

  return (
    <div className={styles.signInForm}>
      <p>TodoList</p>
      <br />
      <form onSubmit={onSubmit}>
        <input name="email" value={email} onChange={emailChange} placeholder="이메일을 입력하세요" />
        <input name="password" value={password} onChange={passWordChange} placeholder="비밀번호를 입력하세요" />{' '}
        <button type="submit">로그인</button>
      </form>
      <p>or</p>
      <p>
        <Link to="/auth/signup">계정이 없으신가요?</Link>
      </p>
    </div>
  );
};

export default SignIn;
