import React, { useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import Modal from 'react-modal'

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        width: '300px'
    }
}

function AddProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('basic')
    const [userData, setUserData] = useState({ name: '', phoneNumber: '', email: '', instagram: '', youtube: '' })

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleBack = () => {
        setActiveTab('basic')
    }

    const handleDone = () => {
        console.log('User Data:', userData)
        closeModal()
    }

    const switchToBasicTab = () => {
        setActiveTab('basic')
    }

    const switchToSocialTab = () => {
        setActiveTab('social')
    }

    return (
        <div className="w-[20rem] h-[15rem] bg-white p-4 rounded-medium border border-gray-200 flex flex-col flex-1 pb-4">
            <strong className="text-gray-700 font-medium">Add Profile</strong>
            <div className="w-full mt-3 flex-1 text-xs flex items-center justify-center">
                <div className="rounded-full bg-gray-200 p-3 cursor-pointer" onClick={openModal}>
                    <HiOutlinePlus className="text-gray-700 text-2xl" />
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customModalStyles}
                contentLabel="Add User Modal"
            >
                <div>
                    <div className="flex">
                        <div
                            className={`cursor-pointer pr-4 ${
                                activeTab === 'basic' ? 'border-b-2 border-blue-500' : ''
                            }`}
                            onClick={switchToBasicTab}
                        >
                            Basic
                        </div>
                        <div
                            className={`cursor-pointer ${activeTab === 'social' ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={switchToSocialTab}
                        >
                            Social
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {activeTab === 'basic' && (
                        <form onSubmit={handleDone}>
                            {/* Basic inputs */}
                            <div className="mb-2">
                                <label>Name:</label>
                                <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
                            </div>
                            <div className="mb-2">
                                <label>Phone Number:</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={userData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label>Email:</label>
                                <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
                            </div>
                        </form>
                    )}
                    {activeTab === 'social' && (
                        <form onSubmit={handleDone}>
                            {/* Social inputs */}
                            <div className="mb-2">
                                <label>Instagram Link:</label>
                                <input
                                    type="text"
                                    name="instagram"
                                    value={userData.instagram}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label>YouTube Link:</label>
                                <input
                                    type="text"
                                    name="youtube"
                                    value={userData.youtube}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    )}
                </div>
                {activeTab === 'social' && (
                    <div className="flex justify-end mt-2">
                        <button className="text-white bg-blue-500 px-3 py-1 mr-2" onClick={handleBack}>
                            Back
                        </button>
                        <button className="text-white bg-blue-500 px-3 py-1" onClick={handleDone}>
                            Done
                        </button>
                    </div>
                )}
            </Modal>
        </div>
    )
}
export default AddProfile
