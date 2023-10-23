import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css"
import "./products_list.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
    const PRODUCTS = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    return (
        <div class="ProductList">
            <div>
                <table id="prdct_table">
                    <thead>
                        <th> Name </th>
                        <th> Price </th>
                    </thead>

                    <tbody>
                        <tr class="product_types">
                            <td> Fruits</td>
                        </tr>

                        <tr class="products">
                            <td> Apple</td>
                            <td> $1</td>
                        </tr>

                        <tr class="products">
                            <td> Dragonfruit </td>
                            <td> $1</td>
                        </tr>

                        <tr class="products">
                            <td class="red_prdct"> Passionfruit </td>
                            <td> $2</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr class="product_types">
                            <td> Vegetables</td>
                        </tr>

                        <tr class="products">
                            <td> Spinach</td>
                            <td> $2</td>
                        </tr>

                        <tr class="products">
                            <td class="red_prdct"> Pumpkin </td>
                            <td> $4</td>
                        </tr>

                        <tr class="products">
                            <td> Peas </td>
                            <td> $1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;