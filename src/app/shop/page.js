// "use client"
// import React from 'react'
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { Loader, HeartPlus } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import Error from '@/component/Error';
// const Page = () => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [wishlist, setWishlist] = useState([]);
//   const [error, setError] = useState(null)
//   const router = useRouter()

//   useEffect(() => {
//     fetch("/api/products") 
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data.products)
//         setLoading(false)
//       })
//   }, [])

//   useEffect(() => {
//     fetch("/api/wishlist")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setWishlist(data.wishlist?.products?.map((p) => p._id) || []);

//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);


//   const handleLike = (product) => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const isInWishlist = wishlist.includes(product._id);
//     const raw = JSON.stringify({
//       productId: product._id,

//     });
//     const requestOptions = {
//       method: isInWishlist ? "DELETE" : "POST",
//       headers: myHeaders,
//       body: raw,
//     };

//     fetch("/api/wishlist", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.success) {
//           setWishlist((prev) =>
//             isInWishlist
//               ? prev.filter((id) => id !== product._id) // remove from wishlist
//               : [...prev, product._id]                 // add to wishlist
//           );
//           // alert(isInWishlist ? "Removed from wishlist" : "Added to wishlist");
//         } else {
//          setError(result.message || "Server Error Please try again later")
//         }
//       })
//       .catch((error) => {
//         // alert("Please login to add to wishlist");
//         setError("Server Error Please Try Again")
//         console.error(error);
//       });
//   };


//   return (
//     <div className="min-h-screen py-10 px-1 sm:px-5 bg-gray-50">
//      {error && <Error error={error} onClose={()=>setError(null)} />  } 
//       {loading ? (
//         <div className="flex justify-center items-center h-96">
//           <Loader className="animate-spin w-12 h-12 text-blue-500" />
//         </div>
//       ) : (
//         <>
//           <div className="text-center mb-10">
//             <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Product Gallery</h1>
//             <p className="text-gray-600 mb-2">
//               Explore our diverse range of products across various categories including Beauty, Fitness, Electronics, and Home & Kitchen.
//             </p>
//             <p className="text-gray-500 font-medium">
//               Total Products: <span className="text-blue-600">{products.length}</span>
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8  gap-x-1 gap-y-2 sm:px-10">
//             {products.map(product => (
//               <Link href={`/singleProduct/${product._id}`} key={product._id}>
//                 <div className="group relative sm:rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden bg-slate-200 cursor-pointer">
//                   <div className="wishlist absolute top-4 right-4 p-2 z-10">
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault(); // Link navigation rokne ke liye
//                         handleLike(product);
//                       }}
//                       className={`cursor-pointer sm:p-3 p-2 rounded-full transition 
//         ${wishlist.includes(product._id)
//                           ? 'bg-red-100 text-red-600'
//                           : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 shadow-lg'}`}
//                       aria-label="wishlist"
//                     >
//                       <HeartPlus className="w-6 h-6" />
//                     </button>
//                   </div>


//                   <div className="relative w-full aspect-square overflow-hidden">
//                     <img
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       src={product.product_image[0]?.url || product.product_image[1]?.url || "/placeholder.png"}
//                       alt={product.product_title}
//                     />
//                     {/* Premium Badge */}
//                     {product.comparision_price && (
//                       <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                         SALE
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-4 flex flex-col gap-2">
//                     <h2 className="font-semibold text-lg text-gray-900 truncate group-hover:text-blue-600">
//                       {product.product_title}
//                     </h2>

//                     <div className="flex items-center gap-2">
//                       <p className="text-xl font-bold text-green-600">
//                         ₹{product.product_price}
//                       </p>
//                       {product.comparision_price && (
//                         <p className="text-gray-400 line-through text-sm">
//                           ₹{product.comparision_price}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <div onClick={() => router.push(`/singleProduct/${product._id}`)} >
//                         <button className="mt-3 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition duration-300">
//                           View Product
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default Page


"use client"
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Loader, Heart, Star, Shield, Truck, Zap, Crown, Eye, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Error from '@/component/Error';

const Page = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const router = useRouter()

  useEffect(() => {
    fetch("/api/products") 
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetch("/api/wishlist")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWishlist(data.wishlist?.products?.map((p) => p._id) || []);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleLike = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const isInWishlist = wishlist.includes(product._id);
    const raw = JSON.stringify({
      productId: product._id,
    });
    
    const requestOptions = {
      method: isInWishlist ? "DELETE" : "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("/api/wishlist", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setWishlist((prev) =>
            isInWishlist
              ? prev.filter((id) => id !== product._id)
              : [...prev, product._id]
          );
        } else {
         setError(result.message || "Server Error Please try again later")
        }
      })
      .catch((error) => {
        setError("Please login to add to wishlist")
        console.error(error);
      });
  };

  // Calculate discount percentage
  const calculateDiscount = (price, comparePrice) => {
    if (!comparePrice) return 0;
    return Math.round(((comparePrice - price) / comparePrice) * 100);
  };

  // Generate star rating (random for demo)
  const generateRating = () => {
    return (Math.random() * 2 + 3).toFixed(1); // 3.0 to 5.0
  };

  return (
    <div className="min-h-screen py-8 px-2 sm:px-6 bg-gradient-to-b from-slate-50 to-slate-100">
      {error && <Error error={error} onClose={()=>setError(null)} />}
      
      {/* Trust Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Secure Shopping</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-600" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-purple-600" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <Loader className="animate-spin w-12 h-12 text-blue-600 mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Loading Premium Products...</p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              <Crown size={18} />
              Premium Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Discover Excellence
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Explore our curated collection of premium products designed to enhance your lifestyle. 
              Each item is carefully selected for quality and performance.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Verified Products</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-semibold">{products.length}</span>
                <span>Premium Items</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-1 md:gap-8">
            {products.map(product => {
              const discount = calculateDiscount(product.product_price, product.comparision_price);
              const rating = generateRating();
              
              return (
                <Link href={`/singleProduct/${product._id}`} key={product._id}>
                  <div 
                    className="group relative bg-white  shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-slate-300 cursor-pointer"
                    onMouseEnter={() => setHoveredProduct(product._id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => handleLike(product, e)}
                      className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                        wishlist.includes(product._id)
                          ? 'bg-red-500 text-white shadow-lg'
                          : 'bg-white/90 text-slate-600 hover:bg-white hover:text-red-500 shadow-md'
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart 
                        size={20} 
                        className={wishlist.includes(product._id) ? 'fill-current' : ''}
                      />
                    </button>

                    {/* Image Container */}
                    <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={product.product_image[0]?.url || product.product_image[1]?.url || "/placeholder.png"}
                        alt={product.product_title}
                      />
                      
                      {/* Overlay on Hover */}
                      <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                        hoveredProduct === product._id ? 'opacity-100' : 'opacity-0'
                      }`}></div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {discount > 0 && (
                          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            {discount}% OFF
                          </div>
                        )}
                        <div className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded shadow-lg">
                          Premium
                        </div>
                      </div>

                      {/* Quick View Button */}
                      <div className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                        hoveredProduct === product._id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <button className="bg-white/95 text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white transition-colors flex items-center gap-2">
                          <Eye size={16} />
                          Quick View
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                          {product.category || "Premium"}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-slate-700">{rating}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {product.product_title}
                      </h3>

                      {/* Price Section */}
                      <div className="flex items-center gap-2 mb-4">
                        <p className="text-2xl font-bold text-slate-900">
                          ₹{product.product_price}
                        </p>
                        {product.comparision_price && (
                          <p className="text-slate-400 line-through text-lg">
                            ₹{product.comparision_price}
                          </p>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(`/singleProduct/${product._id}`);
                          }}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                          <Eye size={18} />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Empty State */}
          {products.length === 0 && !loading && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No Products Found</h3>
              <p className="text-slate-500">Check back later for new arrivals.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Page