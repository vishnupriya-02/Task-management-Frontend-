import axiosInstance from "../axiosMiddleware";

export async function register(registrationData) {
    try {
        const response = await axiosInstance.post("auth/register", registrationData)
        return response.data
    } catch (error) {
        console.error(error)
        throw error;
    }
}