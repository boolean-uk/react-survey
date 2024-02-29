import PropTypes from 'prop-types'
import DeleteButton from "../../../../assets/icons/rubbish-bin-delete-button.png"
import { useState } from 'react'

const DeleteEntryButton = ({entryID, deleteFunc}) => {
    const [confirmButton, setConfirmButton] = useState(false)
    return (
        <>
        { confirmButton ? (
            <div style={{display: "inline"}}>
                <span>Are you sure?</span>
                <button onClick={() => {
                    setConfirmButton(false)
                    deleteFunc(entryID)}
                }> YES </button>
                <button onClick={() => 
                    setConfirmButton(false)
                }> NO </button>
            </div>
        ) : (
            <button onClick={() => setConfirmButton(true)}>
                <img src={DeleteButton}/>
            </button>
        )}
        </>
    )
}

DeleteEntryButton.propTypes =  {
    entryID: PropTypes.string,
    deleteFunc: PropTypes.func,
}

export default DeleteEntryButton