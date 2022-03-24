const { RESTDataSource } = require('apollo-datasource-rest');
class UserDatasource extends RESTDataSource{
constructor(){
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/users/'
    }

async user(id){
        return this.get(`${id.id}`, undefined,{ cacheOptions: { ttl: 0 } });
    }
}
module.exports = UserDatasource;