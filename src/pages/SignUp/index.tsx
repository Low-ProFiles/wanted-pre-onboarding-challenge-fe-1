import styles from './signUp.module.scss';
import Axios from '../../lib/axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type checkVaildType = 'email' | 'password' | 'passwordCheck';

const SignUp = () => {
  const navigate = useNavigate();

  const formReset = {
    email: '',
    password: '',
    passwordCheck: '',
  };

  const placeholder = {
    email: '이메일을 입력하세요',
    password: '8자리 이상을 입력하세요',
    passwordCheck: '비밀번호를 재입력하세요',
  };

  const emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const errorMessages = {
    email: '이메일이 올바르지 않습니다',
    password: '8자리 이상 입력하세요',
    passwordCheck: '입력하신 비밀번호와 다릅니다.',
  };

  const [inputs, setInputs] = useState(formReset);
  const { email, password, passwordCheck } = inputs;

  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [passwordCheckValidate, setPasswordCheckValidate] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // eslint-disable-next-line consistent-return
  const signupReqest = async () => {
    try {
      const data = await Axios.post('/users/create', {
        email,
        password,
      });
      return data.data;
    } catch (e: any) {
      if (e.request.status === 409) {
        alert('이미 존재하는 회원입니다.');
      }
    }
  };

  const formValidate = (type: checkVaildType) => {
    let message = null;
    if (type === 'email' && !emailValidate && email) {
      message = errorMessages.email;
    }

    if (type === 'password' && !passwordValidate && password) {
      message = errorMessages.password;
    }

    if (type === 'passwordCheck' && !passwordCheckValidate && passwordCheck) {
      message = errorMessages.passwordCheck;
    }

    return message;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signupReqest();
      alert(res.message);
      navigate('/auth/signin');
    } catch (error) {
      return;
    }
    setInputs(formReset);
  };

  useEffect(() => {
    setEmailValidate(email !== '' && email.match(emailRegEx) !== null);
    setPasswordValidate(password.length >= 8);
    setPasswordCheckValidate(password === passwordCheck && passwordCheck !== '');
  }, [email, password, passwordCheck]);

  return (
    <div className={styles.signInForm}>
      <p>TodoList</p>
      <br />
      <form onSubmit={onSubmit}>
        <input name="email" value={email} onChange={onChange} placeholder={placeholder.email} />
        <div className={styles.errorMessage}>{formValidate('email')}</div>
        <input name="password" value={password} onChange={onChange} placeholder={placeholder.password} />
        <div className={styles.errorMessage}>{formValidate('password')}</div>
        <input name="passwordCheck" value={passwordCheck} onChange={onChange} placeholder={placeholder.passwordCheck} />
        <div className={styles.errorMessage}>{formValidate('passwordCheck')}</div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
