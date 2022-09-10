class Client {
    static async put (slug, data) {
        const request = await fetch(`/api/${slug}`, {
            method: 'PUT',
            body: JSON.stringify([data]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return request.json()
    }

    static async post (slug, data) {
        const request = await fetch(`/api/${slug}`, {
            method: 'POST',
            body: JSON.stringify([data]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return request.json()
    }
}

export { Client };
