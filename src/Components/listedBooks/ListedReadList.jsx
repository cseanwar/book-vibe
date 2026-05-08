import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  console.log(readList, "bookContext");
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setFilteredReadList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
        console.log(sortedData);
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, readList]);

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No read list data found</h2>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="flex flex-col gap-6">
        {filteredReadList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
