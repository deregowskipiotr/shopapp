import styles from './Product.module.scss';
import {useState, useMemo} from 'react';
//import clsx from 'clsx';
//import Button from './ProductForm/Button/Button';
import PropTypes from 'prop-types';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '..ProductImage/ProductImage';

const Product = ({title, basePrice, colors, sizes,name}) => {

  const handleSubmit = e => {

    e.preventDefault();
    console.log('Name:' + title);
    console.log('Summary');
    console.log('==============');
    console.log('Price:' + getPrice);
    console.log('Size:' + currentSize);
    console.log('Color:' + currentColor);
  }

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

   const getPrice = useMemo(() => {
        const found = sizes.find(element => element.name === currentSize)
        return basePrice + found.additionalPrice;
      }, [currentSize, basePrice, sizes]);

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>

        <ProductForm
        handleSubmit={handleSubmit}
        colors={colors} 
        currentColor={currentColor} 
        setCurrentColor={setCurrentColor} 
        sizes={sizes} 
        currentSize={currentSize} 
        setCurrentSize={setCurrentSize} />


      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  
};

export default Product;