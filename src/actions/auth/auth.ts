
import { tesloApi } from "../../config/api/tesloApi";
import { AuthResponse } from "../../infrastructure/interfaces/auth.responses";

export const authLogin = async (email: string, password: string) => {

    try {

        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email,
            password
        })

        return data

    } catch (error) {
        console.log(error);
        return null;

    }

}