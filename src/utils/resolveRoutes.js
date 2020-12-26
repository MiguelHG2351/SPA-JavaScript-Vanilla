/**
 * 
 * @param {String} route route hash
 * @returns {String}
 */

const resolveRoutes = route => {
    if (route.length <=3) {
        let validRoute = route === '/' ? route : '/:id'
        return validRoute;
    }
    return `/${route}` // Route != :id
}

export default resolveRoutes