import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-6xl mx-auto text-center py-6 space-y-2">
                <div className="border-b border-white/30 pb-2 text-lg">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold">
                            Chittagong Polytechnic Institute
                        </span>
                    </p>
                </div>
                <p className="text-sm">
                    Courtesy : <span className="italic">CST Batch-60 (A2)</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
