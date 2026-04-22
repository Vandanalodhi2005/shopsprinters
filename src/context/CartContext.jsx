import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Sync cart when user logs in/out
  useEffect(() => {
    if (isAuthenticated && user?.cart) {
      // If user has a saved cart in DB, use it
      if (user.cart.length > 0) {
        setCart(user.cart);
      }
    } else if (!isAuthenticated) {
      // Clear cart on logout
      setCart([]);
    }
  }, [isAuthenticated, user]);

  // Save cart to DB when it changes (only for logged in users)
  useEffect(() => {
    const saveCart = async () => {
      if (isAuthenticated && user?.token) {
        try {
          await fetch(`${import.meta.env.VITE_API_URL}/auth/cart`, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({ cartItems: cart }),
          });
        } catch (error) {
          console.error('Failed to save cart to DB:', error);
        }
      }
    };

    const timeoutId = setTimeout(saveCart, 1000); // Debounce saves
    return () => clearTimeout(timeoutId);
  }, [cart, isAuthenticated, user]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
