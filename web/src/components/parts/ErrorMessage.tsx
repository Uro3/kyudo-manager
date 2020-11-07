import * as React from 'react';

type Props = {
  message: string;
  deleteMessage: () => void;
};

const ErrorMessage: React.FC<Props> = props => {
  if (!props.message) {
    return <React.Fragment />
  }

  const onClickDelete = (): void => {
    props.deleteMessage();
  };

  return (
    <div className="notification is-danger is-light">
      <button className="delete" onClick={onClickDelete}></button>
      {props.message}
    </div>
  );
};

export default ErrorMessage;
