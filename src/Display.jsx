import React from 'react';
import styles from './App.module.css';

class Display extends React.Component {

    render = () => {

        let classCountDisabled = this.props.error ? styles.error : ''

        return (
            <span className={classCountDisabled}>
                            {this.props.countValues.count}
            </span>
        )
    }
}

export default Display
