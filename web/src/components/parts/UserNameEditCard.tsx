import * as React from 'react';
import { auth } from '../../firebase';
import { UserAuthContext } from '../global/Auth';

const UserNameEditCard: React.FC<{}> = () => {
  const { userAuth, setUserAuth } = React.useContext(UserAuthContext);
  const [name, setName] = React.useState(userAuth.name);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);

  const onNameChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setName(value);
    if (value.length === 0) {
      setIsSubmitDisabled(true)
    } else {
      setIsSubmitDisabled(false)
    }
  };


  const onSubmit = async (event: React.MouseEvent): Promise<void> => {
    event.preventDefault();
    const currentUser = auth.currentUser;
    if (!currentUser) {
      return;
    }

    try {
      await currentUser.updateProfile({
        displayName: name,
      });
      setUserAuth({
        ...userAuth,
        name
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box">
      <h1 className="title is-4">ニックネームを登録してください</h1>
      <div className="field">
        <label className="label">ニックネーム</label>
        <div className="control">
          <input className="input" type="text" value={name} onChange={onNameChanged}/>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary" onClick={onSubmit} disabled={isSubmitDisabled}>登録</button>
        </div>
      </div>
    </div>
  );
};

export default UserNameEditCard;
