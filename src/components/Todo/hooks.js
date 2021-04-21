import { useCallback, useState } from 'react'

const useCustom = () => {
    const [ modalIsOpen, setModalIsOpen] = useState(false)

    const deleteHandler = useCallback(() => {
        setModalIsOpen(true)
      },[])

    const closeModalHandler = useCallback(() => {
    setModalIsOpen(false)
    },[])

    return {
        handler: {
            deleteHandler,
            closeModalHandler,
        },
        state : {
            modalIsOpen,
        }
    }
}

export default useCustom