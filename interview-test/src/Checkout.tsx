import { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

type ProductType = {
  id: number;
  name: string;
  price: number;
  availableCount: number;
  orderedQuantity: number;
}

const Product = ({ prod, onAddProduct, onSustractProduct }: {prod: ProductType,  onAddProduct: (prod: ProductType) => void, onSustractProduct: (prod:ProductType) => void }) => {

  return (
    <tr>
      <td>{prod.id}</td>
      <td>{prod.name}</td>
      <td>{prod.availableCount}</td>
      <td>${prod.price}</td>
      <td>{prod.orderedQuantity}</td>   
      <td>${(prod.orderedQuantity * prod.price).toFixed(2)}</td>
      <td>
        <button className={styles.actionButton} disabled={prod.orderedQuantity >= prod.availableCount} onClick={() => {onAddProduct(prod)}}>+</button>
        <button className={styles.actionButton} disabled={prod.orderedQuantity < 1} onClick={() => {onSustractProduct(prod)}}>-</button>
      </td>
    </tr>    
  );
}


const Checkout = () => {
  const [products,setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState(0);
  const [discount, setDiscout] = useState(0);

  const getData = async () => {
    setIsLoading(true);
    const res = await getProducts();
    const mappedProducts: ProductType[] = res.map((prod) => ({
      id: prod.id,
      price: prod.price,
      name: prod.name,
      availableCount: prod.availableCount,
      orderedQuantity: 0
    }))
    setProducts(mappedProducts);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  },[]) 

  const onAddProduct = (prod:ProductType) => {
    const updatedProducts = products.map((p) => {
      if (prod.id === p.id && prod.orderedQuantity < prod.availableCount) { 
        p.orderedQuantity ++;
        return p;
      }
      return p;
    })

    setProducts(updatedProducts);
  }

  const onSusctractProduct = (prod:ProductType) => {
    const updatedProducts = products.map((p) => {
      if (prod.id === p.id && p.orderedQuantity > 0) { 
        p.orderedQuantity --;
        return p;
      }
      return p;
    })

    setProducts(updatedProducts);
  }

  useEffect(() => {
    let total = 0;
    let discount = 0;
    products.forEach((prod) => {
      total += prod.price * prod.orderedQuantity;
    })

    if ( total > 1000 ) {
      discount = total * 0.1;
    }    
    setDiscout(discount);
    setTotal(total - discount);

    
  },[products])

  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {isLoading &&  <LoadingIcon />      }  
        {
          !isLoading && 
          <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 && products.map((prod) => <Product prod={prod} onAddProduct={onAddProduct} onSustractProduct={onSusctractProduct} />) }
          </tbody>
        </table>
        }
        <h2>Order summary</h2>
        {
          discount > 0 && <p>Discount: $ {discount.toFixed(2)} </p>
        }
        <p>Total: $ {total.toFixed(2)} </p>       
      </main>
    </div>
  );
};

export default Checkout;