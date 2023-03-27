import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { bookingFailed } from "../../../API/UserAuth"
import { errorSwal } from "../../../utils/Helpers/Swal"

const Failed = () => {
    const { id } = useParams()
    useEffect(() => {
        updatefailed()
    }, [])

    const updatefailed = async () => {
        const result = await bookingFailed(id)
        if (!result?.status === 200) errorSwal(response.data.error)
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="sm:flex sm:items-center sm:justify-center">
                        <svg className="mx-auto h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Booking Failed</h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    We're sorry, something went wrong with your booking. Please try again later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Failed


