import React, { useState } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../Components/listedBooks/ListedReadList";
import ListedWishList from "../../Components/listedBooks/ListedWishList";

const Books = () => {
  const [sortingType, setSortingType] = useState("");

  console.log(sortingType, "sortingType");

  return (
    <div className="container mx-auto my-3">
      <div className="flex flex-col justify-center items-center gap-8 my-9">
        <div className="p-8.25 bg-[#13131305] rounded-2xl w-full">
          <p className="text-center font-bold text-[28px]">Books</p>
        </div>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-[#FFFFFF] rounded-lg font-semibold text-lg">
            Sort by: {sortingType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
