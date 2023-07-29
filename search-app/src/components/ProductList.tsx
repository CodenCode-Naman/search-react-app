import React from "react";
import Product from "./Product";

interface ProductData {
    id: string;
    name: string;
    price: string;
    wishlist: boolean;
}

interface ProductListProps {
    products: ProductData[];
    onWishlistToggle: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onWishlistToggle }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    wishlist={product.wishlist}
                    onWishlistToggle={onWishlistToggle}
                />
            ))}
        </div>
    );
};

export default ProductList;
