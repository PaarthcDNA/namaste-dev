import {create} from "zustand";

// Function to get items from sessionStorage
const getSessionStorageItems = () => {
    const items = sessionStorage.getItem("cartItems");
    return items ? JSON.parse(items) : [];
};

// Function to save items to sessionStorage
const saveSessionStorageItems = (items) => {
    sessionStorage.setItem("cartItems", JSON.stringify(items));
};

const useStore = create((set) => ({
    cartItems: getSessionStorageItems(),
    increasePopulation: (item) =>
        set((state) => {
            const updatedCartItems = [...state.cartItems, item];
            saveSessionStorageItems(updatedCartItems);
            return { cartItems: updatedCartItems };
        }),
    clearCart: () =>
        set(() => {
            sessionStorage.removeItem("cartItems");
            return { cartItems: [] };
        }),
}));

export default useStore;
