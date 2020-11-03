import * as React from 'react';
import { Link, Redirect, useHistory  } from 'react-router-dom';
import { auth } from '../../firebase';
import { UserContext } from '../global/Auth';
import ErrorMessage from '../parts/ErrorMessage';
import { isEmail } from '../../lib/validation';

const Signin: React.FC<{}> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { user } = React.useContext(UserContext);
  const history = useHistory();

  if (user.isLoggedIn) {
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
        await auth.signInWithEmailAndPassword(email, password);
        history.push('/');
      } catch (error) {
        console.log(error);
        setError('認証に失敗しました');
      }
    }
  };

  return (
    <div className="container og-form-field">
      <h1 className="title is-4">サインイン</h1>
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
          <button className="button is-primary" onClick={onSubmit}>サインイン</button>
        </div>
      </div>
      アカウントがない場合：<Link to='/signup'>新規登録</Link>
    </div>
  );
};

export default Signin;
