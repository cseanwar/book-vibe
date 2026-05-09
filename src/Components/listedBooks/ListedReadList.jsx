// import React, { useContext, useEffect, useState } from "react";
// import { BookContext } from "../../context/BookContext";
// import BookCard from "../ui/BookCard";

// const ListedReadList = ({ sortingType }) => {
//   const { readList } = useContext(BookContext);
//   console.log(readList, "bookContext");
//   const [filteredReadList, setFilteredReadList] = useState(readList);

//   useEffect(() => {
//     if (sortingType) {
//       if (sortingType === "pages") {
//         const sortedData = [...readList].sort(
//           (a, b) => a.totalPages - b.totalPages,
//         );
//         console.log(sortedData);
//         setFilteredReadList(sortedData);
//       } else if (sortingType === "rating") {
//         const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
//         console.log(sortedData);
//         setFilteredReadList(sortedData);
//       }
//     }
//   }, [sortingType, readList]);

//   if (filteredReadList.length === 0) {
//     return (
//       <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
//         <h2 className="font-bold text-3xl">No read list data found</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="my-8">
//       <div className="flex flex-col gap-6">
//         {filteredReadList.map((book, ind) => (
//           <BookCard key={ind} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListedReadList;

import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCardHorizontal from "../ui/BookCardHorizontal";
import { FaBookOpen } from "react-icons/fa";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType === "pages") {
      setFilteredReadList([...readList].sort((a, b) => a.totalPages - b.totalPages));
    } else if (sortingType === "rating") {
      setFilteredReadList([...readList].sort((a, b) => b.rating - a.rating));
    } else {
      setFilteredReadList(readList);
    }
  }, [sortingType, readList]);

  if (filteredReadList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-60 bg-[#F3F3F3] rounded-2xl border-2 border-dashed border-gray-200 my-8">
        <FaBookOpen className="text-5xl text-gray-300 mb-4" />
        <h2 className="font-bold text-xl text-[#13131380]">No read list data found</h2>
        <p className="text-sm text-[#13131380] mt-1">Start reading and mark books as read!</p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex flex-col gap-4">
        {filteredReadList.map((book) => (
          <BookCardHorizontal key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;