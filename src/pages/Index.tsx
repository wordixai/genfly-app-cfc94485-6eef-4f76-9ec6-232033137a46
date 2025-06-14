import { useState } from 'react';
import { Star, ShoppingCart, Heart, Zap } from 'lucide-react';

const Index = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Neon Dreams Jacket",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      rating: 5,
      tag: "HOT!"
    },
    {
      id: 2,
      name: "Pop Art Sneakers",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4,
      tag: "NEW"
    },
    {
      id: 3,
      name: "Retro Vibes Tee",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 5,
      tag: "SALE"
    },
    {
      id: 4,
      name: "Comic Style Bag",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4,
      tag: "WOW!"
    }
  ];

  return (
    <div className="min-h-screen bg-dots relative overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative py-20 text-center">
        <div className="absolute top-10 left-10 text-6xl animate-spin">💥</div>
        <div className="absolute top-20 right-20 text-5xl animate-bounce">⚡</div>
        <div className="absolute bottom-10 left-1/4 text-4xl" style={{animation: 'wiggle 2s ease-in-out infinite'}}>🌟</div>
        
        <h1 className="text-8xl font-bold comic text-white mb-6 drop-shadow-lg" style={{
          textShadow: '4px 4px 0 #000, 8px 8px 0 #ff69b4, 12px 12px 0 #ffa500'
        }}>
          POP SHOP
        </h1>
        <div className="comic-bubble mx-auto max-w-md mb-8">
          <p className="text-2xl handwritten font-bold text-black">
            Where Fashion Meets Art! 🎨
          </p>
        </div>
        <button className="bounce-button bg-pink-500 hover:bg-pink-600 text-white text-2xl handwritten font-bold py-4 px-8 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-110">
          Shop Now! ✨
        </button>
      </header>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-6xl comic text-center mb-16 text-white drop-shadow-lg" style={{
          textShadow: '3px 3px 0 #000, 6px 6px 0 #ff69b4'
        }}>
          TRENDING NOW!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Tag */}
              <div className="absolute -top-4 -right-4 z-20 bg-yellow-400 text-black font-bold text-lg comic py-2 px-4 rounded-full border-3 border-black transform rotate-12 shadow-lg">
                {product.tag}
              </div>

              {/* Product Card */}
              <div className={`pop-frame bg-white rounded-3xl p-6 ${hoveredProduct === product.id ? 'animate-pulse' : ''}`}>
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dots-white opacity-30"></div>
                </div>

                <h3 className="text-2xl handwritten font-bold text-black mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < product.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl comic text-pink-600 font-bold">{product.price}</span>
                  <Heart className="w-8 h-8 text-red-500 cursor-pointer hover:fill-current transition-all duration-300 transform hover:scale-125" />
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white handwritten font-bold py-3 px-4 rounded-full border-3 border-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <ShoppingCart className="w-5 h-5 inline mr-2" />
                    Add to Cart
                  </button>
                  <button className="bg-yellow-400 text-black handwritten font-bold py-3 px-4 rounded-full border-3 border-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <Zap className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="comic-bubble mb-8">
            <h3 className="text-4xl comic text-black mb-4">Don't Miss Out!</h3>
            <p className="text-xl handwritten text-black">
              Join our pop art revolution and get 20% off your first order! 🎆
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email..."
              className="handwritten text-lg py-3 px-6 rounded-full border-4 border-black shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300"
            />
            <button className="bounce-button bg-gradient-to-r from-yellow-400 to-pink-500 text-black handwritten font-bold py-3 px-8 rounded-full border-4 border-black shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Discount! 🎁
            </button>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-5 text-4xl animate-bounce delay-1000">🎨</div>
      <div className="fixed top-3/4 right-10 text-3xl" style={{animation: 'pop 3s ease-in-out infinite'}}>💫</div>
      <div className="fixed bottom-20 left-1/3 text-5xl animate-spin">🌈</div>
    </div>
  );
};

export default Index;