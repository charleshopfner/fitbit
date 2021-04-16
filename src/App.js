import { Component } from 'react';
import TopBar from './TopBar';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductData from './utils/ProductData';
import classes from './App.module.css';


class App extends Component {

  state = {
    productData: ProductData,
    mainImagePos: 0,
    currentSelectedFeature: 0,
  }

  onFeatureBtnClick = (pos) => this.setState({currentSelectedFeature: pos});

  selectColorOption = (pos) => this.setState({mainImagePos: pos});

  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update ?')
    if (nextState.mainImagePos === this.state.mainImagePos && nextState.currentSelectedFeature === this.state.currentSelectedFeature) {
      return false;
    } 
    return true; 
  }

  render() {
    console.log('rendering AppJS')
    return (
      <div className="App">
        <TopBar />
        <div className={classes.Product}>
          <ProductPreview
            mainImage={this.state.productData.colorOptions[this.state.mainImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature} />
          <ProductDescription
            data={this.state.productData}
            mainImage={this.state.mainImage}
            currentMainImagePos={this.state.mainImagePos} 
            currentSelectedFeature={this.state.currentSelectedFeature}
            onFeatureBtnClick={this.onFeatureBtnClick}
            selectColorOption={this.selectColorOption} />
        </div>
      </div>
    );
  }
}

export default App;
