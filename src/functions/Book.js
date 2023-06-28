const books = [
    {id:1,title:"人間椅子",comment:"京極夏彦さんの著書「虚談」の解説を書かれていたのが、\nロックバンド「人間椅子」の和嶋 慎治さんだったことがきっかけで読みはじめました。\nおかげで単語聞いただけで鳥肌が立つようになってしまいました。"},
    {id:2,title:"羅生門",comment:"学生時代、国語の授業で読んだ懐かしい作品。国語のM先生は今でもお元気だろうか…"},
    {id:3,title:"注文の多い料理店",comment:"小学生の頃、朗読劇で聞いた懐かしい作品。\nちなみに「酢 クリーム サラダ」で検索するとミツカンさんが提供しているフルーツサラダのレシピが出てきます。"},
    {id:4,title:"虚談 - レシピ",comment:"京極夏彦さんの作品が読みやすくて好きだなと感じたので、短編集を購入しました。\n「レシピ」はその中の一作品で、まさかのホラーでした。"},
    {id:5,title:"駆け込み訴え",comment:"羨望、恋、憧憬、劣等感、愛憎交じり合う訴えに圧倒されました。\n駆け込まれた旦那さまもこんな言葉の嵐を受けるとは思っていなかっただろうな。"},
]

export const getBooks = () => books

export const getBook = id =>{
    return books.find(book=>book.id===id)
    //findで検索
}