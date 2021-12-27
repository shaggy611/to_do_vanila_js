class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async getNotes(token) {
        try {
            const request = new Request(this.url + `/notes.json?auth=${token}`, {
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

    async updateNote(note, idFirebase) {
        try {
            const request = new Request(`${this.url}/notes/${idFirebase}.json`, {
                method: 'put',
                body: JSON.stringify(note)
            })

            return useRequest(request)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteNote(idFirebase) {
        try {
            const request = new Request(`${this.url}/notes/${idFirebase}.json`, {
                method: 'delete'
            })

            return useRequest(request)
        } catch(error) {
            console.log(error)
        }
    }
}

async function useRequest(request) {
    const respons = await fetch(request)
    return await respons.json()
}

export const apiService = new ApiService('https://todo-vanillajs-default-rtdb.europe-west1.firebasedatabase.app/')