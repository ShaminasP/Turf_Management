
export const ValidateSignupForm = (formData, isLogin) => {
    const newErrors = {};

    if (!formData.name && !isLogin) {
        newErrors.name = "Name is required";
    }
    if (!formData.email) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
        newErrors.password = "Password is required";
    }
    if (!formData.mobile && !isLogin) {
        newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile) && !isLogin) {
        newErrors.mobile = "Mobile number is invalid";
    }
    return newErrors;
}


export const ValidateTurfRegistration = (formData) => {
    const newErrors = {};

    if (!formData.courtName) {
        newErrors.courtNameError = "Court Name is required";
    }

    if (!formData.email) {
        newErrors.emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.emailError = "Email is invalid";
    }

    if (!formData.mobile) {
        newErrors.mobileError = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobileError = "Mobile number is invalid";
    }


    if (!formData.location) {
        newErrors.locationError = "Location is required";
    }

    if (!formData.password) {
        newErrors.passwordError = "Password is required";
    }

    if (!formData.event) {
        newErrors.eventError = "Event is required";
    }

    if (!formData.loction_Details) {
        newErrors.loction_DetailsError = "Loction details is required";
    }
    if (!formData.images.length) {
        newErrors.imagesError = 'Image is required';
    }
    console.log(newErrors);

    return newErrors;
}