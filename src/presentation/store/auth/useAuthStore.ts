import { create } from "zustand";
import { User } from "../../../domain/entities/user";
import { AuthStatus } from "../../../infrastructure/interfaces/auth.status";
import { autCheckStatus, authLogin } from "../../../actions/auth/auth";
import { StorageAdapter } from "../../../config/adapters/StorageAdapter";

export interface AuthState {
    status: AuthStatus;
    token?:string;
    user?:User;

    login: (email:string,password:string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>;
}

// Todo-----hacer un hook con el set del user y token 

export const useAuthStore = create<AuthState>()( ( set, get ) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async  (email:string,password:string) => {
        const resp = await authLogin(email,password);

        if ( !resp ){
            set( {status:'unauthenticated',token:undefined,user:undefined} )
            return false
        }

        //toDo, save token and user in storage
        await StorageAdapter.setItem('token',resp.token)
        // const storeToken = await StorageAdapter.getItem('token')
        // console.log("🚀 ~ login: ~ storeToken:", storeToken)

        
        set({status:'authenticated',token:resp.token,user:resp.user})
        console.log("🚀 ~ login: ~ resp:", resp)
        

        return true
    },

    checkStatus:async () => {
        try {
            const resp = await autCheckStatus();

            if (!resp) {
                throw new Error('Token validation failed');
            }

            await StorageAdapter.setItem('token', resp.token);
            set({ status: 'authenticated', token: resp.token, user: resp.user });
        } catch (error) {
            console.log("🚀 ~ checkStatus error:", error);
            await StorageAdapter.removeItem('token');
            set({ status: 'unauthenticated', token: undefined, user: undefined });
        }
        

    },

    logout: async () => {

        
        console.log("Logout function called");
        
        await StorageAdapter.removeItem('token')
        set({status:'unauthenticated',token:undefined,user:undefined})

    }

}))
