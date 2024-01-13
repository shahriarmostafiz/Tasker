import React, { useState } from 'react';
import axios from 'axios';
import { GrAttachment } from "react-icons/gr";
import toast from 'react-hot-toast';


const FileUpload = ({ refetch, id }) => {
    const [files, setFiles] = useState([]);
    // const [showModal, setShowModal] = useState(false);

    const handleFileChange = (e) => {
        setFiles([...files, ...e.target.files]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const response = await axios.post(`https://tasker-zeta-jet.vercel.app/upload/${id}`, formData);
            console.log(response.data);

            refetch()


        } catch (error) {
            console.error('Error uploading files:', error);
        }

        // Clear the files array after upload
        setFiles([]);
        // Close the modal
        // setShowModal(false);
        hideModal()
        toast.success("file uploaded successfully")
    };

    const showModal = () => {
        const modalElement = document.getElementById(id);
        if (modalElement) {
            modalElement.style.display = 'block';
        }
    };

    const hideModal = () => {
        const modalElement = document.getElementById(id);
        if (modalElement) {
            modalElement.style.display = 'none';
        }
    };
    return (

        <>
            <button
                className="bg-transperent hover:text-blue-800  text-slate-800 font-bold  px-2 "
                onClick={showModal}
            >
                <GrAttachment size={12} />
            </button>

            <div className="fixed z-10 inset-0 overflow-y-auto" id={id} style={{ display: 'none' }}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <input type="file" multiple onChange={handleFileChange} className="mb-2" />

                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-headline">
                                        Uploaded Files
                                    </h3>
                                    <ul className="list-disc pl-4">
                                        {files.map((file, index) => (
                                            <li key={index} className="text-gray-700">
                                                {file.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                onClick={handleUpload}
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Upload
                            </button>
                            <button
                                onClick={() => hideModal()}
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};

export default FileUpload;
