import { makeStyles } from '@material-ui/styles'

const style = makeStyles(() => ({
    actions: {
        textAlign: 'right',
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
    card : {
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
        padding: '1rem',
        width: '20rem'
    },
}))

export default style
