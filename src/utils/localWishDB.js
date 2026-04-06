const getAllWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishList");

  if (allWishList) return JSON.parse(allWishList);

  return [];
};

const addWishListToLocalDB = (book) => {
  const allBooks = getAllWishListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist){
    // Ei data ta local db te add krte chai
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks))
  }
};

export { getAllWishListFromLocalDB, addWishListToLocalDB };