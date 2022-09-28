enum requestType {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

function fetchRequestAuth( url: string, method: 'post' | 'get' | 'put' ): string | object{
    return url.toUpperCase()

}

fetchRequestAuth('s', 'put')