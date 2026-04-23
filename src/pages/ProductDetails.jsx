import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="w-12 h-12 border-4 border-[#ff2d46] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <h2 className="text-3xl font-medium text-dark mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md font-medium">Sorry, we couldn't find the printer you're looking for. It might have been removed or the link is incorrect.</p>
        <Link 
          to="/shop"
          className="bg-dark text-white px-10 py-4 rounded-full font-medium hover:bg-[#ff2d46] transition-all block"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const name = product.title || product.name || 'Untitled Printer';
  const price = Number(product.price || product.salePrice || 0);
  const oldPrice = Number(product.oldPrice || product.price_origin || product.originalPrice || 0);
  const type = typeof product.category === 'object' ? product.category?.name : (product.category || 'Laser Printers');
  const images = product.images?.length > 0 ? product.images : ['/placeholder-printer.png'];

  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 text-[12px] font-medium text-[#999] mb-12">
          <Link to="/" className="hover:text-dark">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-dark">Shop</Link>
          <span>/</span>
          <span className="text-dark truncate max-w-[200px]">{name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-[#fcfcfc] rounded-[40px] border border-gray-100 flex items-center justify-center p-12 overflow-hidden group shadow-sm transition-all duration-500 hover:shadow-xl">
              <img 
                src={images[activeImg]} 
                alt={name}
                className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImg(i)}
                    className={`w-24 h-24 flex-shrink-0 rounded-2xl border-2 transition-all p-3 bg-[#fcfcfc] ${activeImg === i ? 'border-[#ff2d46] shadow-md scale-95' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img src={img} alt={`${name} ${i}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {product.brand && (
                <span className="bg-dark text-white px-4 py-1.5 rounded-full text-[11px] font-medium">
                  {product.brand}
                </span>
              )}
              <span className="bg-[#f3f4f6] text-gray-500 px-4 py-1.5 rounded-full text-[11px] font-medium">
                {type}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-medium text-dark mb-6 leading-tight">
              {name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-6 mb-8 lg:mb-12 text-left">
              <span className="text-4xl font-medium text-dark tracking-tighter">
                ${price.toFixed(2)}
              </span>
              {oldPrice > price && (
                <span className="text-xl text-[#ccc] line-through font-medium">
                  ${oldPrice.toFixed(2)}
                </span>
              )}
              {oldPrice > price && (
                <span className="bg-[#ff2d46] text-white px-3 py-1 rounded-sm text-[11px] font-medium">
                  Save ${ (oldPrice - price).toFixed(0) }
                </span>
              )}
            </div>

            {/* Short Info */}
            <div className="space-y-6 mb-10 text-left">
               <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-[#fdf2f2] flex items-center justify-center text-[#ff2d46]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <p className="text-dark font-medium text-sm">Currently In Stock</p>
                    <p className="text-xs font-medium text-gray-400">Ready for fast shipment across USA & Canada</p>
                  </div>
               </div>

               <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-[#f0f9ff] flex items-center justify-center text-[#3b82f6]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  </div>
                  <div>
                    <p className="text-dark font-medium text-sm">Free Express Shipping</p>
                    <p className="text-xs font-medium text-gray-400">Arrives in 3-7 business days</p>
                  </div>
               </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6 mb-10 text-left">
               <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Quantity</span>
               <div className="flex items-center bg-[#fcfcfc] rounded-2xl border border-gray-100 p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-xl font-medium text-gray-400 hover:text-dark transition-colors"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-medium text-dark">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-xl font-medium text-gray-400 hover:text-[#ff2d46] transition-colors"
                  >
                   +
                  </button>
               </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
               <button 
                onClick={handleBuyNow}
                className="bg-dark text-white py-5 px-10 rounded-[20px] font-medium text-[15px] hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-lg shadow-black/10 flex items-center justify-center gap-3"
               >
                 Buy Now
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </button>
               <button 
                onClick={handleAddToCart}
                className="border-2 border-gray-100 text-dark py-5 px-10 rounded-[20px] font-medium text-[15px] hover:border-dark transition-all flex items-center justify-center gap-3"
               >
                 Add to Cart
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
               </button>
            </div>

            {/* Tabs Section */}
            <div className="mt-16 bg-white border border-gray-100 rounded-[30px] overflow-hidden shadow-sm">
               {/* Tab Headers */}
               <div className="flex border-b border-gray-100">
                  {['overview', 'specifications', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-8 py-5 text-[12px] font-medium uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-dark border-b-2 border-dark' : 'text-[#999] hover:text-dark'}`}
                    >
                      {tab}
                    </button>
                  ))}
               </div>

               {/* Tab Content */}
               <div className="p-8 md:p-12 lg:p-16 text-left">
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl prose prose-sm prose-gray leading-relaxed text-gray-500 font-medium">
                       <h2 className="text-xl font-medium text-dark mb-6 tracking-tight">About this product</h2>
                       {product.overview ? (
                         <div dangerouslySetInnerHTML={{ __html: product.overview }} />
                       ) : product.description ? (
                         <div dangerouslySetInnerHTML={{ __html: product.description }} />
                       ) : (
                         <p>The {name} is engineered for stability and high-performance printing. Whether for a busy home office or a small business, this printer provides consistent quality and professional results.</p>
                       )}
                    </div>
                  )}

                  {activeTab === 'specifications' && (
                    <div className="max-w-5xl overflow-x-auto">
                       <h2 className="text-xl font-medium text-dark mb-6 tracking-tight">Technical Specifications</h2>
                       {product.technicalSpecification ? (
                         <div 
                           className="prose prose-sm max-w-none text-gray-600 [&>table]:w-full [&>table]:border-collapse [&>table>tbody>tr]:border-b [&>table>tbody>tr]:border-gray-50 [&>table>tbody>tr>td]:py-4 [&>table>tbody>tr>td:first-child]:font-medium [&>table>tbody>tr>td:first-child]:text-dark [&>table>tbody>tr>td:first-child]:w-1/3"
                           dangerouslySetInnerHTML={{ __html: product.technicalSpecification }} 
                         />
                       ) : (
                         <div className="bg-[#fcfcfc] p-10 rounded-2xl border border-dashed border-gray-100 text-center text-gray-400 font-medium">
                           Detailed technical specifications are not available for this model yet.
                         </div>
                       )}
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="max-w-4xl">
                       <div className="flex items-center justify-between mb-10">
                          <h2 className="text-xl font-medium text-dark tracking-tight">Customer Reviews</h2>
                          <div className="flex items-center gap-2">
                             <div className="flex text-[#ffcc00]">
                                {[1,2,3,4,5].map(s => <span key={s} className="text-xl">★</span>)}
                             </div>
                             <span className="font-medium text-dark text-sm">({product.numReviews || 0})</span>
                          </div>
                       </div>
                       
                       {product.reviews && product.reviews.length > 0 ? (
                         <div className="space-y-8">
                            {product.reviews.map((rev, i) => (
                              <div key={i} className="pb-8 border-b border-gray-50 last:border-0">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center font-medium text-[10px] text-gray-400">
                                    {rev.name?.charAt(0) || 'C'}
                                  </div>
                                  <span className="font-medium text-dark text-sm">{rev.name}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">{rev.comment}</p>
                              </div>
                            ))}
                         </div>
                       ) : (
                         <div className="bg-[#fcfcfc] p-10 rounded-2xl border border-gray-100 text-center">
                           <p className="text-gray-400 font-medium mb-4">No reviews yet. Be the first to share your experience!</p>
                           <button className="text-[#ff2d46] font-medium text-[12px] uppercase border-b-2 border-[#ff2d46] pb-1">
                             Write a Review
                           </button>
                         </div>
                       )}
                    </div>
                  )}
               </div>
            </div>

            {/* Trust Footer */}
            <div className="mt-12 p-8 rounded-[30px] bg-[#fafafa] border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { icon: '🛡️', label: '100% Genuine' },
                 { icon: '🚚', label: 'Tracked Delivery' },
                 { icon: '💳', label: 'Safe Payments' },
                 { icon: '⭐', label: 'Top-Rated Support' }
               ].map((item, idx) => (
                 <div key={idx} className="text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-[11px] font-medium text-gray-400">{item.label}</p>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
