module.exports = (route) => {
    route.doRegisterRoute('post','user/registration', '','','registrationUser');
    route.doRegisterRoute('post','user/login', '','','loginUser');
    route.doRegisterRoute('get','user/:id', '','','getUser');
    route.doRegisterRoute('put','user/:id', '','','updateUser');
}
