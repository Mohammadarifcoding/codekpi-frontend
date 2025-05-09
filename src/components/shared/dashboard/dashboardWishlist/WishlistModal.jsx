import React from 'react';

const WishlistModal = ({ onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[300px] p-6 bg-white rounded-md shadow-lg">
                <h3 className="text-lg font-semibold">Remove product</h3>
                <p className="my-4">Remove product from wishlist</p>
                <div className="flex justify-end gap-4">
                    <button
                        className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                        onClick={onConfirm}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistModal;