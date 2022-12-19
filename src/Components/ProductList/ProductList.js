import React from "react";
import "./ProductList.css";
import Product from '../Product/Product'
import { product } from "../../Data";

const ProductList = () => {
  return (
    <div className="productlist">
      <div  className="pl-text">
        <h1 className="pl-title">Create & Inspire. It's Lambo </h1>
        <p className="pl-disc">
          A tax consultant advises and guides clients on tax-related matters.
          They work with individuals and organizations to ensure they comply
          with tax laws and help minimize potential tax liability.
        </p>
      </div>
      <div className="pl-list">
        {product.map((item)=>(
          <Product key={item.id}img={item.img} link={item.link}/>
        ))}
        
       
      </div>
    </div>

  );
};

export default ProductList;
