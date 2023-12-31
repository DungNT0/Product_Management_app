import './App.css';
import SearchBar from './component/search_bar/search_bar';
import ProductList from './component/products_list/products_list';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <ProductList/>
        {/* <Routes>
          <Route path="/products_list" exact element={<ProductList />}/>
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
