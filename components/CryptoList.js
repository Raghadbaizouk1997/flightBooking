import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CryptoList.module.scss";
import { Search } from "./Search";
import ReactPaginate from "react-paginate";

export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const checkprice = (p) => {
  const pricechenge = Math.sign(p);
  if (pricechenge === -1) {
    return "red";
  }
  return "green";
};
export const CryptoList = ({ coins }) => {
 



  // ** BEGIN SEARCH **
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, coins]);

  // ** END SEARCH **

   // ** BEGIN PAGINATE **
   const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 10;
 
   useEffect(() => {
     const endOffset = itemOffset + itemsPerPage;
     setCurrentItems(filteredCoins.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(filteredCoins.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, filteredCoins]);
 
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % filteredCoins.length;
     setItemOffset(newOffset);
   };
   // ** END PAGINATE **
  return (
    <section className="coin-list">
      <div className="container">
        <div className={styles.table}>
          <Search value={search} onChange={handleSearch} />
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Coin</th>
                <th>Price</th>
                <th>Change 24H</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((coin, index) => {
                const {
                  id,
                  icon,
                  name,
                  symbol,
                  price,
                  priceChange1d,

                  marketCap,
                } = coin;
                return (
                  <Link href={"/" + id} key={id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td className="--flex-start">
                        <Image src={icon} alt={name} width={20} height={20} />
                        &nbsp;
                        {symbol}
                      </td>
                      <td>${formatNumbers(price.toFixed(2))}</td>
                      <td className={checkprice(priceChange1d)}>
                        {priceChange1d}
                      </td>
                      <td>{formatNumbers(marketCap.toFixed(2))}</td>
                    </tr>
                  </Link>
                );
              })}
            </tbody>
          </table>
        </div>
        <ReactPaginate 
        breakLabel= "..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        />
      </div>
    </section>
  );
};
