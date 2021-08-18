import React, { useEffect } from 'react';
import Styles from './styles/main';
import { getProducts, updateActiveCart } from '../redux/actions/productActions';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory} from "react-router-dom";


const Home = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(state => state.products.products);
  const activeCartData = useSelector(state => state.products.activeCart);
  const history = useHistory();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  const onAddToCart = (item) => {
    console.log(item);
    // Commented below code for working later on.
    /* const tempCart = JSON.parse(JSON.stringify(activeCartData));
    dispatch(updateActiveCart(tempCart.push(item))); */
  }

  const onJumpToCart = () => {
    history.push("/active-cart");
  }

  const prepareListData = () => {
    return productsData.map((item, key) => {
      return <div key={key} style={Styles.blockView}>
          <div style={Styles.prodName}>Name - {item.name}</div>
          <div>Price - {item.price}</div>
          <button className='btn' style={Styles.commonBtn} onClick={() => onAddToCart(item)}>Add to Cart</button><br />
      </div>
    })
  }

  return (
    <div style={Styles.commonPadd}>
      <div style={Styles.headRow}>
      <div style={Styles.leftCol}>List of Products</div>
      <div style={Styles.rightCol}><button className='btn' style={Styles.commonBtn} onClick={onJumpToCart}>Jump to Cart</button></div>
      </div>
      
      {productsData.length > 0 ? prepareListData() : <div style={Styles.commonPadd}>{'No product is available'}</div>}
    </div>
  )
}

export default Home;