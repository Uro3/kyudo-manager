import * as React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { UserAuthContext } from '../global/Auth';
import ErrorMessage from '../parts/ErrorMessage';
import { isEmail } from '../../lib/validation';

const Signup: React.FC<{}> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { userAuth } = React.useContext(UserAuthContext);
  const history = useHistory();

  if (userAuth.isLoggedIn) {
    return <Redirect to='/'/>;
  }

  const onEmailChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const deleteErrorMessage = (): void => {
    setError('');
  };

  const validate = (): boolean => {
    if (!email) {
      setError('メールアドレスを入力してください');
      return false;
    }
    if (!isEmail(email)) {
      setError('メールアドレスの形式が不正です');
      return false;
    }
    if (!password) {
      setError('パスワードを入力してください');
      return false;
    }
    if (password.length < 8) {
      setError('メールアドレスは8文字以上で入力してください');
      return false;
    }
    return true;
  };

  const onSubmit = async (event: React.MouseEvent): Promise<void> => {
    event.preventDefault();

    if (validate()) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title is-4">新規登録</h1>
      <ErrorMessage message={error} deleteMessage={deleteErrorMessage} />
      <div className="field">
        <label className="label">メールアドレス</label>
        <div className="control">
          <input className="input" type="email" value={email} onChange={onEmailChanged}/>
        </div>
      </div>
      <div className="field">
        <label className="label">パスワード</label>
        <div className="control">
          <input className="input" type="password" value={password} onChange={onPasswordChanged}/>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary" onClick={onSubmit}>登録</button>
        </div>
      </div>
      アカウント登録済みの場合：<Link to='/signin'>サインイン</Link>
    </div>
  );
};

export default Signup;
