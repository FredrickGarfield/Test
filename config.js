/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/api/',
    bare: 'https://decimals.mountzion.nsw.edu.au/bare/',
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: '/handler.js',
    client: '/client.js',
    bundle: '/bundle.js',
    config: '/config.js',
    sw: '/the.js',
};
