export class Transform {
    static FBobjectToArray(notes) {
        let arrKey = Object.keys(notes)
        let arrObj = arrKey.map(key => {
            const item = notes[key]
            item.idFirebase = key
            return item
        })

        return arrObj
    }
}