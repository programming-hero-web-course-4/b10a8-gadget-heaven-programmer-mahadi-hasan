import React from 'react';

const Modal = ({ showModal, closeModal }) => {
    return (
        <>
            {showModal && (<div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
                <div className="bg-white p-5 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Congratulations!</h3>
                    <p className="py-4">Your purchase has been successful.</p>
                    <div className="flex justify-end">
                        <button onClick={closeModal} className="btn btn-primary" > Close </button>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default Modal;