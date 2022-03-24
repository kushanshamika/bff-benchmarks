const { RESTDataSource } = require('apollo-datasource-rest');
class TodoDatasource extends RESTDataSource{
constructor(){
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/todos'
    }

async todo(id){
        return this.get(`?userId=${id.id}`, undefined, { cacheOptions: { ttl: 0 } });
    }
}
module.exports = TodoDatasource;