import { create } from 'zustand';
import axios from 'axios';

export const useCartStore = create((set, get) => ({
    cart: [],

    fetchCart: async (userEmail) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/cart?email=${userEmail}`);
            set({ cart: res.data.cart });
        } catch (err) {
            console.error("❌ Failed to fetch cart:", err.message);
        }
    },

    addToCart: async (product, userEmail) => {
        const existingItem = get().cart.find((item) => item.slug === product.slug);

        if (existingItem) {
            const updatedCart = get().cart.map((item) =>
                item.slug === product.slug
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            set({ cart: updatedCart });
        } else {
            const updatedCart = [...get().cart, { ...product, quantity: 1 }];
            set({ cart: updatedCart });
        }

        try {
            await axios.post(`http://localhost:5000/api/cart`, {
                email: userEmail,
                cart: get().cart,
            });
        } catch (err) {
            console.error("❌ Failed to sync cart:", err.message);
        }
    },

    removeFromCart: async (slug, userEmail) => {
        const updatedCart = get().cart.filter((item) => item.slug !== slug);
        set({ cart: updatedCart });

        try {
            await axios.post(`http://localhost:5000/api/cart`, {
                email: userEmail,
                cart: updatedCart,
            });
        } catch (err) {
            console.error("❌ Failed to sync cart:", err.message);
        }
    },

    updateQuantity: async (slug, quantity, userEmail) => {
        const updatedCart = get().cart.map((item) =>
            item.slug === slug ? { ...item, quantity: Math.max(quantity, 1) } : item
        );
        set({ cart: updatedCart });

        try {
            await axios.post(`http://localhost:5000/api/cart`, {
                email: userEmail,
                cart: updatedCart,
            });
        } catch (err) {
            console.error("❌ Failed to sync cart:", err.message);
        }
    },

    clearCart: async (userEmail) => {
        set({ cart: [] });

        try {
            await axios.post(`http://localhost:5000/api/cart`, {
                email: userEmail,
                cart: [],
            });
        } catch (err) {
            console.error("❌ Failed to clear cart:", err.message);
        }
    },

    getTotal: () =>
        get().cart.reduce((total, item) => {
            const numericPrice = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
            return total + numericPrice * item.quantity;
        }, 0),
}));
