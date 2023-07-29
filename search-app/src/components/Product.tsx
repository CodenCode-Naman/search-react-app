import React, { useState } from "react";

interface ProductProps {
    id: string;
    name: string;
    price: string;
    wishlist: boolean;
    onWishlistToggle: (productId: string) => void;
}

const Product: React.FC<ProductProps> = ({
    id,
    name,
    price,
    wishlist,
    onWishlistToggle,
}) => {
    const handleWishlistClick = () => {
        onWishlistToggle(id);
    };

    return (
        <div className="product">
            <h3>{name}</h3>
            <p>{price}</p>
            <button
                className={`wishlist-btn ${wishlist ? "wishlist-active" : ""}`}
                onClick={handleWishlistClick}
            >
                Wishlist
            </button>
        </div>
    );
};

export default Product;
