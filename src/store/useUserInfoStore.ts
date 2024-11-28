import { create } from "zustand";

// Define the UserInfo interface
export interface UserInfo {
  id: string;
  username: string;
  email: string;
  phone?: string;
  address?: string;
  image?: string;
  role?: string;
  is_active?: boolean;
  is_verified?: boolean;
  is_deleted?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

// Define the Zustand store type
interface UserInfoStore {
  userData: UserInfo;
  setUserData: (params: UserInfo) => void;
}

// Create the Zustand store with proper typings
const useUserInfoStore = create<UserInfoStore>((set) => ({
  userData: {
    id: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    image: "",
    role: "",
    is_active: false,
    is_verified: false,
    is_deleted: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  },
  setUserData: (params: UserInfo) => set({ userData: params }),
}));

export default useUserInfoStore;
