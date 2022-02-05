/**
 * Check if a link is external or not.
 * 
 * This will compare the link with the current domain first.
 * Works client side and server side.
 */
export default ({ app, req }, inject) => {
    inject('isExternal', (link) => {
        let host = null
        let protocol = null
        
        if (process.server && req) {
            host = req.headers.host
            protocol = req.connection.encrypted ? 'https:' : 'http:'
        } else {
            host = window.location.host
            protocol = window.location.protocol
        }
        
        if (!host || !protocol) {
            return false
        }
        
        const match = link.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/)
        
        if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== protocol) {
            return true
        }
        if (typeof match[2] === 'string' && match[2].length > 0 && match[2].replace(new RegExp(':(' + { 'http:': 80, 'https:': 443 }[protocol] + ')?$'), '') !== host) {
            return true
        }
       
        return false
    })
}
