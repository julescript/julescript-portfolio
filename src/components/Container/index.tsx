import React, { FC } from 'react';
import './styles.css';

const Container: FC<any> = (props) => {
  return (
    <div className="container-parent">
        <div className="container-child">
            {props.children}
        </div>
    </div>
  );
}

export default Container;
