const CART_KEY = "cartItems";

/**
 * 📌 ดึงข้อมูลตะกร้าสินค้าจาก Local Storage
 */
const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

/**
 * 📌 บันทึกข้อมูลตะกร้าสินค้าลง Local Storage
 */
const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

/**
 * ✅ 1. ฟังก์ชันเพิ่มสินค้าลงตะกร้า
 * @param {Object} product - สินค้าที่จะเพิ่ม { id, name, price, quantity }
 */
const addToCart = (product) => {
  let cart = getCart();

  // ตรวจสอบว่ามีสินค้านี้ในตะกร้าหรือไม่
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex !== -1) {
    // อัปเดตจำนวนสินค้าถ้ามีอยู่แล้ว
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    // เพิ่มสินค้าใหม่
    cart.push(product);
  }

  saveCart(cart);
  console.log("🛒 Added to cart:", cart);
};

/**
 * ✅ 2. ฟังก์ชันลบสินค้าจากตะกร้า
 * @param {number} productId - ID ของสินค้าที่ต้องการลบ
 */
const removeFromCart = (productId) => {
  let cart = getCart();

  // กรองสินค้าที่ไม่ตรงกับ ID ที่ต้องการลบ
  cart = cart.filter((item) => item.id !== productId);

  saveCart(cart);
  console.log("🗑 Removed from cart:", cart);
};

/**
 * 📌 ฟังก์ชันดึงรายการสินค้าทั้งหมดในตะกร้า
 */
const getCartItems = () => {
  return getCart();
};

/**
 * 📌 ฟังก์ชันเคลียร์ตะกร้าทั้งหมด
 */
const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  console.log("🛒 Cart cleared");
};

// ✅ Export ฟังก์ชันให้ใช้ใน Component อื่น
export { addToCart, removeFromCart, getCartItems, clearCart };
