import * as React from 'react';
import * as styles from './hello-world.css';
console.log(styles)

export const HelloWorld = () => (
  <div className={styles.header}>
    <h1>Hello world!</h1>
  </div>
);
