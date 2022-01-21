const resolveRoutes = (route) => {
    if(route.length <= 3) {
        let validteRoute = route === '/' ? route : '/:id';

        return validteRoute;
    }
    return `/${route}`;
}

export default resolveRoutes;