import { FiShoppingCart } from 'react-icons/fi';

// Import product icons
import writingIcon from '../assets/products/writing_2327400 1.png';
import designIcon from '../assets/products/design-tool.png';
import portfolioIcon from '../assets/products/portfolio.png';
import operationIcon from '../assets/products/operation.png';
import socialMediaIcon from '../assets/products/social-media.png';

const iconMap = {
  'writing': writingIcon,
  'design-tool': designIcon,
  'portfolio': portfolioIcon,
  'operation': operationIcon,
  'social-media': socialMediaIcon,
};

const Cart = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center">
        <FiShoppingCart className="w-14 h-14 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Cart is Empty</h3>
        <p className="text-gray-400 text-sm">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-5">Your Cart</h3>

      {/* Cart Items */}
      <div className="space-y-3 mb-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center">
                <img
                  src={iconMap[item.icon] || portfolioIcon}
                  alt={item.name}
                  className="w-5 h-5"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-400">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="text-pink-500 hover:text-pink-700 font-medium text-sm transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-4 border-t border-gray-100 mb-5">
        <span className="text-gray-500 text-sm">Total:</span>
        <span className="text-xl font-bold text-gray-900">${total}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full btn-gradient py-3 rounded-full font-semibold transition hover:opacity-90 text-sm"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
