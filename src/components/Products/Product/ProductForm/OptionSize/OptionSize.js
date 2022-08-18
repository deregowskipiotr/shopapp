import clsx from "clsx"
import styles from './OptionSize.module.scss';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, setCurrentSize, currentSize}) => {

  return(
    <div className={styles.sizes}>
      <h3 className={styles.OptionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => <li key={shortid()}><button type='button' onClicl={() => setCurrentSize(size.name)} className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>)}
      </ul>
    </div>
  );
};

OptionSize.propTypes={
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;