import classes from './ProductPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const ProductPreview = (props) => {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

  return (
    <div className={classes.ProductPreview}>
      <img src={props.mainImage} alt="product preview" />
      {
        props.currentSelectedFeature === 0 ?
          <div className={`${classes.TimeSection}`}>
            <p>{`${currentHour}:${currentMinutes}`}</p>
          </div>
          :
          <div className={`${classes.HeartBeatSection}`}>
            <FontAwesomeIcon icon={faHeartbeat} />
            <p>78</p>
          </div>
      }
    </div>
  );
}

export default ProductPreview;