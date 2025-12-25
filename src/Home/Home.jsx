import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Home = () => {
    const navigate = useNavigate();

    const handleData = (e) => {
        e.preventDefault();
        const form = e.target;

        const userInfo = {
            name: form.name.value,
            department: form.department.value,
            roll: form.roll.value,
            session: form.session.value,
            semester: form.semester.value,
            shift: form.shift.value,
            phone: form.phone.value,
            father: form.father.value,
            mother: form.mother.value,
            blood: form.blood.value,
            dob: form.dob.value,
            village: form.village.value,
            post: form.post.value,
            district: form.district.value,
            subDistrict: form.subDistrict.value,
            photo: form.photo.files[0],
        };

        toast.success('ID Card Generated Successfully!');
        navigate('/download', { state: userInfo });
    };

    const inputStyle =
        "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const labelStyle = "block text-sm font-medium mb-1";

    return (
        <div className=" bg-gradient-to-br from-blue-50 to-cyan-100 py-8 px-4">
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-6 md:p-10">
                <h2 className="text-center text-xl md:text-2xl font-bold text-blue-600 mb-8">
                    Student ID Card Information
                </h2>

                <form onSubmit={handleData} className="space-y-10">
                    <section>
                        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                            Academic Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label className={labelStyle}>Full Name</label>
                                <input name="name" placeholder="Enter your full name" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Department</label>
                                <select name="department" required className={inputStyle}>
                                    <option value="">Select Department</option>
                                    <option>CST</option>
                                    <option>Civil</option>
                                    <option>Electrical</option>
                                    <option>Electronics</option>
                                    <option>Mechanical</option>
                                    <option>Power</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelStyle}>Roll</label>
                                <input name="roll" type="number" placeholder="e.g. 685913" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Session</label>
                                <input name="session" placeholder="e.g. 2021-22" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Semester</label>
                                <select name="semester" required className={inputStyle}>
                                    <option value="">Select Semester</option>
                                    <option>1st</option>
                                    <option>2nd</option>
                                    <option>3rd</option>
                                    <option>4th</option>
                                    <option>5th</option>
                                    <option>6th</option>
                                    <option>7th</option>
                                    <option>8th</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelStyle}>Shift</label>
                                <select name="shift" required className={inputStyle}>
                                    <option value="">Select Shift</option>
                                    <option>1st Shift (A1)</option>
                                    <option>1st Shift (B1)</option>
                                    <option>2nd Shift (A2)</option>
                                    <option>2nd Shift (B2)</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelStyle}>Phone</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="+8801XXXXXXXXX"
                                    pattern="^\+8801[0-9]{9}$"
                                    required
                                    className={inputStyle}
                                    onFocus={(e) => {
                                        if (!e.target.value) {
                                            e.target.value = '+880';
                                        }
                                    }}

                                />
                            </div>

                            <div>
                                <label className={labelStyle}>Photo</label>
                                <input
                                    name="photo"
                                    type="file"
                                    accept="image/*"
                                    required
                                    className={inputStyle}
                                />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelStyle}>Father's Name</label>
                                <input name="father" placeholder="Enter father's name" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Mother's Name</label>
                                <input name="mother" placeholder="Enter mother's name" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Blood Group</label>
                                <select name="blood" required className={inputStyle}>
                                    <option value="">Select Blood Group</option>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>O+</option>
                                    <option>AB+</option>
                                    <option>A-</option>
                                    <option>B-</option>
                                    <option>O-</option>
                                    <option>AB-</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelStyle}>Date of Birth</label>
                                <input name="dob" type="date" required className={inputStyle} placeholder='Enter your date of birth '/>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                            Address
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input name="village" placeholder="Village name" required className={inputStyle} />
                            <input name="post" placeholder="Post office name" required className={inputStyle} />

                            <input
                                name="subDistrict"
                                placeholder="Sub-district / Thana"
                                required
                                className={inputStyle}
                            />
                            <select name="district" required className={inputStyle}>
                                <option value="">Select District</option>
                                <option>Bagerhat</option>
                                <option>Bandarban</option>
                                <option>Barguna</option>
                                <option>Barishal</option>
                                <option>Bhola</option>
                                <option>Bogra</option>
                                <option>Brahmanbaria</option>
                                <option>Chandpur</option>
                                <option>Chapainawabganj</option>
                                <option>Chattogram</option>
                                <option>Chuadanga</option>
                                <option>Cox's Bazar</option>
                                <option>Dhaka</option>
                                <option>Dinajpur</option>
                                <option>Faridpur</option>
                                <option>Feni</option>
                                <option>Gaibandha</option>
                                <option>Gazipur</option>
                                <option>Gopalganj</option>
                                <option>Habiganj</option>
                                <option>Jamalpur</option>
                                <option>Jashore</option>
                                <option>Jhalokathi</option>
                                <option>Jhenaidah</option>
                                <option>Joypurhat</option>
                                <option>Khagrachhari</option>
                                <option>Khulna</option>
                                <option>Kishoreganj</option>
                                <option>Kurigram</option>
                                <option>Kushtia</option>
                                <option>Lakshmipur</option>
                                <option>Lalmonirhat</option>
                                <option>Madaripur</option>
                                <option>Magura</option>
                                <option>Manikganj</option>
                                <option>Meherpur</option>
                                <option>Moulvibazar</option>
                                <option>Munshiganj</option>
                                <option>Mymensingh</option>
                                <option>Naogaon</option>
                                <option>Narail</option>
                                <option>Narayanganj</option>
                                <option>Narsingdi</option>
                                <option>Natore</option>
                                <option>Netrokona</option>
                                <option>Nilphamari</option>
                                <option>Noakhali</option>
                                <option>Pabna</option>
                                <option>Panchagarh</option>
                                <option>Patuakhali</option>
                                <option>Pirojpur</option>
                                <option>Rajbari</option>
                                <option>Rajshahi</option>
                                <option>Rangamati</option>
                                <option>Rangpur</option>
                                <option>Satkhira</option>
                                <option>Shariatpur</option>
                                <option>Sherpur</option>
                                <option>Sirajganj</option>
                                <option>Sunamganj</option>
                                <option>Sylhet</option>
                                <option>Tangail</option>
                                <option>Thakurgaon</option>
                            </select>

                        </div>
                    </section>

                    <div className="text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold transition">
                            Generate ID Card
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
