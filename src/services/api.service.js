class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async getNotes() {
        try {
            const request = new Request(this.url + '/notes.json', {
                method: 'get',
            })

            return useRequest(request)
        } catch (error) {
            console.log(error)
        }
    }

    async createNote(note) {
        try {
            const request = new Request(this.url + '/notes.json', {
                method: 'post',
                body: JSON.stringify(note)
            })

            return useRequest(request)
        } catch (error) {
            console.log(error)
        }
    }
}

async function useRequest(request) {
    const respons = await fetch(request)
    return await respons.json()
}

export const apiService = new ApiService('https://todo-vanillajs-default-rtdb.europe-west1.firebasedatabase.app/')