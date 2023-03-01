const number = '+917034002639'
const email = 'mrzeddem@gmail.com'
const email2 = 'shaminasp4@gmail.com'

const ContactInfo = () => (
    <div className="lg:col-span-4 col-span-12">
        <div className="md:px-20 lg:px-8  px-10 lg:py-10 pb-10">
            <h1 className="font-bold text-3xl mb-7">Contact Info</h1>

            <div className="flex mt-14">
                <span className="text-gray-700 text-xl mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                </span>
                <span className="ml-5 text-xl">{number}</span>
            </div>
            <div className="flex mt-5">
                <span className="text-gray-700 text-xl mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                </span>
                <span className="ml-5 text-xl"> {email}</span>
            </div>
            <div className="mt-10 text-indigo-500 w-72">
                <hr className="h-px my-8 bg-indigo-400 border-0" />
            </div>
            <div className="flex mt-14">
                <span className="text-gray-700 text-xl mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                </span>
                <span className="ml-5 text-xl">{number}</span>
            </div>
            <div className="flex mt-5">
                <span className="text-gray-700 text-xl mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                </span>
                <span className="ml-5 text-xl"> {email2}</span>
            </div>

        </div>

    </div>
)

export default ContactInfo