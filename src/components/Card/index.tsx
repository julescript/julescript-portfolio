import React, { FC } from 'react';
import './styles.css';

const Card: FC<any> = (props) => {
  return (
    <div className="card-parent">
        {props.children}
    </div>
  );
}

export default Card;
