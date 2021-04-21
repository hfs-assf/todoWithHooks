import React from 'react'
import PropTypes from 'prop-types'

import useStyle from './style'

const Backdrop = ({onCancelbackdrop}) => {
  const classes = useStyle()

    return (
        <div 
          className={classes.modal}
          onClick={onCancelbackdrop}
        />
    )
}

Backdrop.defaultProps = {
  onCancelbackdrop: () => {},
}

Backdrop.propTypes = {
  onCancelbackdrop: PropTypes.func,
}

export default Backdrop