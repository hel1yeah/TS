function testWithFetch(url: string | number){
    if (typeof url === 'string') {
        console.log(url.toUpperCase())
    } else {
        console.log(url)
    }
}

function test2(err: string | string[]){
    if (Array.isArray(err)){
        console.log(err)
    } else {

    }
}

function object1(obj: { a:number } | { b: number }){

}