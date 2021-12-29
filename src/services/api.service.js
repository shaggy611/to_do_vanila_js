import { CookieEdit } from "./cookie.service"

class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async getNotes() {
        try {
            const request = new Request(this.url + `/notes/${CookieEdit.getCookie('userId')}.json?auth=${CookieEdit.getCookie('tokenAccess')}`, {
                method: 'get',
            })

            return useRequest(request)
        } catch (error) {
            console.log(error)
        }
    }

    async createNote(note) {
        try {
            const request = new Request(this.url + `/notes/${CookieEdit.getCookie('userId')}.json?auth=${CookieEdit.getCookie('tokenAccess')}`, {
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
            const request = new Request(`${this.url}/notes/${CookieEdit.getCookie('userId')}/${idFirebase}.json?auth=${CookieEdit.getCookie('tokenAccess')}`, {
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
            const request = new Request(`${this.url}/notes/${CookieEdit.getCookie('userId')}/${idFirebase}.json?auth=${CookieEdit.getCookie('tokenAccess')}`, {
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