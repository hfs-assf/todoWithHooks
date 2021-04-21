import { makeStyles } from '@material-ui/styles'

const style = makeStyles(() => ({
    modal: {
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px',
        backgroundColor: 'white',
        padding: '1rem',
        textAlign: 'center',
        width: '30rem',
        zIndex: 10,
        position: 'fixed',
        top: '20vh',
        left: 'calc(50% - 15rem)',
    },
    btn: {
        font: 'inherit',
        padding: '0.5rem 1.5rem',
        cursor: 'pointer',
        borderRadius: '4px',
        backgroundColor: '#800040',
        color: 'white',
        border: '1px solid #800040',
        margin: '0 1rem',
    },
    btnAlt: {
        backgroundColor: 'transparent',
        color: '#800040',
        font: 'inherit',
        padding: '0.5rem 1.5rem',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #800040',
        margin: '0 1rem',
    },
}))

export default style
