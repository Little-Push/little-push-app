class Client {
    static async put (slug, data) {
        return this._request('PUT', slug, data);
    }

    static async post (slug, data) {
        return this._request('POST', slug, data);
    }

    static async _request (method, slug, data) {
        const config = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
        if (data) {
            config.body = JSON.stringify([data])
        }
        const request = await fetch(`/api/${slug}`, config)
        if (request.status === 403) {
            window.location.replace('/login')
        }
        return request.json()
    }
}

export { Client };
