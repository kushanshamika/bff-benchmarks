const { RESTDataSource } = require('apollo-datasource-rest');
class PostDatasource extends RESTDataSource{
constructor(){
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/posts'
    }

async post(id){
        return this.get(`?userId=${id.id}`, undefined,{ cacheOptions: { ttl: 0 } });
    }
}
module.exports = PostDatasource;