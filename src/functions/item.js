const items = [
    { id:1, name: 'あああ'},
    { id:2, name: 'いいい'},
    { id:3, name: 'ううう'}
]

// ↑のオブジェクトを代入
export const getItems = () => items

// ↓idをアロー関数で引数として渡す
export const getItem = id => {
    // 変数itemsの中からidを探してくれる処理↓
    // itemの中にあるidが同じものだけ出してくれる
    return items.find( item => id === item.id)
}

// 複数exportしていくので、defaultはいらない