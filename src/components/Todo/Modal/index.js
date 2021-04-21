import React from 'react'
import PropTypes from 'prop-types'

import useStyle from './style'

const Modal = ({ cancelHandler, confirmHandler }) => {
  const classes = useStyle()

    return (
        <div className={classes.modal}>
            <p>Are you Sure</p>
            <button 
                className={classes.btnAlt}
                onClick={cancelHandler}
            >
                Cancel
            </button>
            <button 
                className={classes.btn}
                onClick={confirmHandler}
            >
                Confirm
            </button>
        </div>
    )
}

Modal.defaultProps = {
    cancelHandler: () => {},
    confirmHandler: () => {},
  }
  
Modal.propTypes = {
    cancelHandler: PropTypes.func,
    confirmHandler: PropTypes.func,
}

export default Modal

