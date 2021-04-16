import classes from './ProductDescription.module.css';


const ProductDescription = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductLogo];
        if (pos === props.currentMainImagePos) {
            classArr.push(classes.SelectedProductLogo);
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} onClick={() => props.selectColorOption(pos)} alt={item.styleName} />
        )
    })

    const featureItems = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem];
        if (pos === props.currentSelectedFeature) { classArr.push(classes.SelectedFeatureItem); }


        return (
            <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureBtnClick(pos)}>{item}</button>
        )
    })

    return (

        <div className={classes.ProductDescription}>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <h2>Select color</h2>
            <div>
                {colorOptions}
            </div>
            <h2>Features</h2>
            <div>
                {featureItems}
            </div>
            <div>
                <button className={[classes.FeatureItem, classes.BuyItem].join(' ')}>Buy now</button>
            </div>
        </div>
    );
}

export default ProductDescription;