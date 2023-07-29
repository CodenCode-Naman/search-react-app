import React, { useState } from "react";
import ProductList from "./ProductList";
import { generateFakeProducts } from "../data/trends";
import "./SearchTab.css";

const SearchTab: React.FC = () => {
    const [showSuggestionBox, setShowSuggestionBox] = useState(false);
    const [products, setProducts] = useState(generateFakeProducts());

    const handleFilterChange = (filter: string) => {
        // Implement filtering logic based on the selected filter
        // For demo purposes, we'll just generate new fake products
        const newProducts = generateFakeProducts();
        setProducts(newProducts);
    };

    const handleWishlistToggle = (productId: string) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId ? { ...product, wishlist: !product.wishlist } : product
            )
        );
    };

    return (
        <div className="search-tab">
            {/* Implement the search tab and latest trend suggestion box here */}
            <button onClick={() => setShowSuggestionBox(!showSuggestionBox)}>
                Toggle Suggestion Box
            </button>
            {showSuggestionBox && <div>Suggestion Box</div>}

            {/* ProductList component */}
            <ProductList products={products} onWishlistToggle={handleWishlistToggle} />
        </div>
    );
};

export default SearchTab;
