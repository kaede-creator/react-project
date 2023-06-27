const books = [
    {id:1,title:"人間椅子"},
    {id:2,title:"羅生門"},
    {id:3,title:"注文の多い料理店"},
    {id:4,title:"虚談 - レシピ"},
]

export const getBooks = () => books

export const getBook = id =>{
    return books.find(book=>book.id===id)
    //findで検索
}