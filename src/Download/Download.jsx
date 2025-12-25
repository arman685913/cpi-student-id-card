import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/image.png';
import QRCode from 'react-qr-code';

const Download = () => {
    const { state } = useLocation();
    if (!state) return <div className="flex italic flex-col items-center justify-center h-[60vh] text-center px-4">
        <svg
            className="w-16 h-16 mb-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7a2 2 0 012-2h4l2 3h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            />
        </svg>

        <p className="text-red-500 text-2xl font-bold mb-1">No Data Found</p>
        <p className="text-sm">Please make sure the data exists or try again later.</p>
    </div>


    const {
        name,
        department,
        roll,
        session,
        semester,
        shift,
        phone,
        father,
        mother,
        blood,
        dob,
        village,
        post,
        subDistrict,
        district,
        photo
    } = state;

    const qrData = JSON.stringify({ name, department, roll, semester, session, shift, phone, blood });

    const imageUrl = photo ? URL.createObjectURL(photo) : null;


    const handlePrint = () => {
        window.print()
    };

    return (
        <div className='pt-15 md:pt-24 lg:pt-32 pb-5 md:pb-8 lg:pb-10 bg-sky-100'>
            <div id="card1" className=" bg-white py-4 flex flex-col items-center gap-6 mb-5 md:mb-8 lg:mb-10">

                {/* FRONT SIDE */}
                <div className="w-[243px] h-[153px] border bg-white shadow-sm overflow-hidden text-[10px] relative">

                    <div className='absolute top-10 opacity-10 right-20'>
                        <img className=' w-[90px]' src={logo} alt="" />
                    </div>

                    {/* Header */}
                    <div className="bglue bg-blue-600 text-white flex items-center justify-center gap-1 px-2 py-1">
                        <img className="w-4 mt-0.5" src={logo} alt="Logo" />
                        <h3 className="text-[13px] font-semibold leading-none">
                            Chittagong Polytechnic Institute
                        </h3>
                    </div>

                    {/* Body */}
                    <div className="px-3 pt-1">
                        <div className="text-center mb-1">
                            <span className="inline-block border border-gray-400 px-2 py-[1px] rounded-full text-[10px] font-medium">
                                Identity Card
                            </span>
                        </div>

                        <div className="flex gap-2 justify-center mr-2 font-medium">
                            {/* Photo */}
                            <div className="w-[48px] h-[55px] mt-1 border rounded overflow-hidden flex items-center justify-center">
                                {imageUrl ? (
                                    <img src={imageUrl} alt="Student" className="w-full h-full object-cover " />
                                ) : (
                                    <span className="text-[8px] text-gray-400">No Photo</span>
                                )}
                            </div>

                            {/* Info */}
                            <div className="leading-3.5">
                                <p className=" text-">Name: {name}</p>
                                <p>Department: {department}</p>
                                <p>Roll: {roll}</p>
                                <p>Shift: {shift}</p>
                                <div className='flex gap-2'>
                                    <p>Semester: {semester}</p>
                                    <p>Session: {session}</p>
                                </div>
                            </div>
                        </div>

                        {/* Signature */}
                        <div className="flex justify-between mt-3 px-1 italic text-[9px]">
                            <span>Principal</span>
                            <span>Student</span>
                        </div>

                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="relative border w-[243px] h-[153px] bg-white shadow-sm px-3 py-1 text-[10px] overflow-hidden ">

                    <div className='absolute top-7 opacity-10 right-20'>
                        <img className=' w-[90px]' src={logo} alt="" />
                    </div>
                    <h3 className="text-blue-600 font-semibold text-xs mb-0.5">
                        Important Information:
                    </h3>
                    <div className='pl-0.5'>

                        <p>Father's Name: {father}</p>
                        <p>Mother's Name: {mother}</p>
                        <p>Blood Group: {blood}</p>
                        <p>Date of Birth: {dob}</p>
                    </div>

                    <div className='leading-3'>
                        <h4 className="font-semibold mt-1">Address</h4>
                        <div className='flex gap-1'>
                            <p>{village},</p>
                            <p>P.O: {post}</p>
                        </div>
                        <p>Sub-district: {subDistrict}</p>
                        <p>District: {district}</p>
                        <p>Phone: {phone}</p>
                    </div>

                    <div className="absolute bottom-3 right-3 flex justify-end mt-1">
                        <div className="w-14 h-14  flex items-center justify-center">
                            <QRCode
                                value={qrData}
                                size={52}
                                bgColor="#ffffff"
                                fgColor="#000000"
                            />

                        </div>
                    </div>
                </div>

            </div>

            <div className="flex gap-4 items-center justify-center">
                <button
                    onClick={handlePrint}
                    className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Download / Print
                </button>
            </div>
        </div>
    );
};

export default Download;
