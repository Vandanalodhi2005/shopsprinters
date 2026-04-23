import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    addToCart(product, 1);
    navigate('/cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/home`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        const allPrinters = [
          ...(data?.laser || []),
          ...(data?.inkjet || []),
          ...(data?.home || []),
          ...(Array.isArray(data) ? data : (data?.products || []))
        ].slice(0, 12);

        setProducts(allPrinters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSeeMore = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[54px] font-[900] text-dark mb-6 tracking-tight">Featured Products</h2>
          <p className="text-[#666] text-lg font-medium leading-relaxed">
            Browse reliable printers, ink, and accessories that customers trust for everyday home and office use.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#ff2d46] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {products.map((product) => {
                const name = product.title || product.name || 'Untitled Printer';
                const price = Number(product.price || product.salePrice || 0);
                const oldPrice = Number(product.oldPrice || product.price_origin || product.originalPrice || 0);
                const type = typeof product.category === 'object' ? product.category?.name : (product.category || 'Laser Printers');

                return (
                  <div
                    key={product._id}
                    className="group relative flex flex-col cursor-pointer"
                    onClick={() => navigate(`/product/${product._id}`)}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-square bg-[#fcfcfc] rounded-3xl overflow-hidden mb-6 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center p-6 border border-gray-100">
                      <img
                        src={product.images && product.images[0] ? product.images[0] : '/placeholder-printer.png'}
                        alt={name}
                        className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Sale Badge */}
                      {oldPrice > price && (
                        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[12px] font-bold text-gray-800 shadow-sm border border-gray-100 flex items-center gap-1">
                          Sale!
                        </div>
                      )}

                      {/* Cart Icon */}
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-dark opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#ff2d46] hover:text-white translate-y-2 group-hover:translate-y-0 z-20"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col px-1 text-left">
                      <h3 className="text-[17px] font-bold text-dark leading-snug mb-1.5 group-hover:text-[#ff2d46] transition-colors line-clamp-2">
                        {name}
                      </h3>
                      <p className="text-[13px] text-[#999] mb-4 font-bold">
                        {product.brand ? `${product.brand} | ` : ''}{type}
                      </p>
                      <div className="mt-auto flex items-center gap-3">
                        {oldPrice > price && (
                          <span className="text-[15px] text-[#ccc] line-through font-bold">${oldPrice.toFixed(2)}</span>
                        )}
                        <span className="text-[16px] font-black text-dark">${price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 flex justify-center">
              <button
                onClick={handleSeeMore}
                className="bg-dark text-white py-4 px-12 text-[15px] font-[900] tracking-widest hover:bg-[#ff2d46] transition-all duration-300 rounded-full shadow-lg hover:shadow-primary/30 uppercase"
              >
                See More
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
