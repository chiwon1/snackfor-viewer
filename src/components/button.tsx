import React, { FC } from 'react';

type Props = {
  name: string;
  handleClick: () => void;
};

const Button: FC<Props> = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

export default Button;
