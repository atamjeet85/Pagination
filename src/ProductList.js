import React, { useEffect, useState } from "react";
import axios from "axios";
import Filters from "./Filters";
import { PiPlusSquareDuotone } from "react-icons/pi";
function ProductList() {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const[buttons,setButtons]=useState([])
  const rowsPerPage = 8;
  const lastIndex=rowsPerPage*currPage;
  const  firstIndex=lastIndex-rowsPerPage;
  const currPageData = filteredProducts.slice(firstIndex,lastIndex );
  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const [sortOption, setSortOption] = useState("lowToHigh");

  useEffect(() => {
    axios
      .post(
        "https://tcsk-admin-test.onrender.com/user/get/666da90578507b5932982b2b",
        { page:currPage,limit: 20 }
      ).then((res) => {
        const data = res.data.products || [];
        setProductList(data);
        setButtons(res.data.subcategories.subCategories||[]);
        console.log(res.data.subcategories.subCategories,"buttons")
        setFilteredProducts(data);
      }).catch((error) => {
        console.log(error);
      });
  }, [currPage]);
  useEffect(() => {
    let sortedProducts = [...productList];
    if (sortOption === "low-to-high") {
      sortedProducts.sort((a, b) => a.mrp_price - b.mrp_price);
    } else if (sortOption === "high-to-low") {
      sortedProducts.sort((a, b) => b.mrp_price - a.mrp_price);
    } else if (sortOption === "a-to-z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "z-to-a") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredProducts(sortedProducts);
    setCurrPage(currPage);
  }, [sortOption, productList]);
  const handlePrev = () => {
    setCurrPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setCurrPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePageClick = (page) => {
    setCurrPage(page);
  };
  const handleSortChange = (option) => {
    setSortOption(option);
  };
  return (<>
    <div>

        <div className="flex">
        <div className="filt">
      <Filters onSortChange={handleSortChange} />
     </div>
          <div className=" flex gap-2 m-7">
            {buttons&&buttons.map((val)=>(<>
          <button className="bg-slate-500 rounded-lg w-28 h-12"> {val.name}</button>
            </>))}
            </div></div>
     
      
      <div className="grid grid-cols-4 gap-15">
        {currPageData.map((product) => (
          <div key={product._id} className="border p-4">
            <img src={product.img_ids[0]?.url} alt="product" className="bg-auto"/>
            <h2>{product.name}</h2>
           <div className="flex gap-8 justify-center m-6 text-center items-center	"> 
           <div className="text-red-500	">₹{product.mrp_price}</div>
           <div ><PiPlusSquareDuotone className="bg-rose-500" /></div> </div>
          </div>
        ))}
      </div>
     
      <div className="pagination">
        <button onClick={handlePrev} disabled={currPage === 1} className={currPage === 0?'bg-gray-300':""}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button className={currPage===index+1?'active':'not-active'}key={index + 1}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currPage === totalPages} className={currPage === totalPages?'not-active':"active"}>
          Next
        </button>
      </div>
    </div></>
  );
}
export default ProductList;
