import * as React from 'react';
import styles from './hello-world.css';
import testStyles from './test.css';

export const HelloWorld = () => (
  <div className={styles.headera}>
    <h1 className={testStyles.footer}>Hello world!</h1>
  </div>
);
