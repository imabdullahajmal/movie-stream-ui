import React from 'react'

const MailForm = () => {
    return (
        <div className="mt-6 w-full max-w-xl">
            <p className="text-md mb-3">
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                    type="email"
                    placeholder="Email address"
                    className="p-4 w-full sm:w-3/5 rounded-md bg-[#3f3f3f62] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-red-600 hover:bg-red-700 transition text-white font-bold text-lg px-6 py-4 rounded-md sm:ml-2">
                    Get Started &gt;
                </button>
            </div>
        </div>
    )
}

export default MailForm