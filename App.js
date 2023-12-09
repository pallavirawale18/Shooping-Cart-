import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://5.imimg.com/data5/XD/JU/KO/SELLER-14290347/800-wh-9-trock-white-original-imafhyt5wy6tnwhn-500x500.jpeg',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61LO6l4zB4L._SX522_.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71tZtxBhOJL._SX679_.jpg',
      name: 'Leather Wallet ',
      category: 'Wallet',
      seller: 'WildHorn Store',
      price: 4000
    },
    {
      url: 'https://in.danielwellington.com/cdn/shop/products/dbd5e5b6734dd6a902ba1b0fae4a7a3f79b62a9c.png?v=1679929589',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqd4L3CJlO2BwQr1XFxdRZbvo2gjPhQEk9Q&usqp=CAU',
      name: 'Coeffe Mug',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
    {
        url: 'https://admin.mochishoes.com/product/66-47/660/66-47M45.jpg',
        name: 'Bag For Women',
        category: 'Bag',
        seller: 'Mochi',
        price: 1000
      },
      {
        url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61VeqaTnvOL._SY695_.jpg',
        name: 'Sandal For Women',
        category: 'Sandal',
        seller: 'Sonal Sandals ',
        price: 400
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5kvkj81GgLwizbUU5IC51SBsy4LIKvmuqBEcTdDs8Umzy7_Py2ND3MA4vPx9nqVt_4k&usqp=CAU',
        name: 'Earrings For Women',
        category: 'Earring',
        seller: 'Beauty Shop',
        price: 350
      },
      {
        url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Qme55oADL._SX569_.jpg',
        name: ' cotton Hoodies',
        category: ' Hoodies',
        seller: 'ALKEP shop',
        price: 800
      },
      {
        url: 'https://cdn.shopclues.com/images1/thumbnails/91510/320/320/140407565-91510723-1665755025.jpg',
        name: 'Dress For Women',
        category: 'Dresses',
        seller: 'Raabta Fashion',
        price: 1000
      },
      {
        url: 'https://5.imimg.com/data5/SELLER/Default/2023/11/358112473/KZ/RB/ON/53961531/men-formal-dresses-500x500.jpg',
        name: 'Shirt For men',
        category: 'Shirt',
        seller: 'Fashion hub',
        price: 750
      },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
