export class Transform {
    static FBobjectToArray(notes) {
        let arrKey = Object.keys(notes)
        let arrObj = arrKey.map(key => {
            let item = notes[key]
            return item
        })
        
        return arrObj
    }
}