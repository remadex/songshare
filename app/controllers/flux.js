import Controller from '@ember/controller';
import ENV from "songshare/config/environment";

export default Controller.extend({
    server: ENV.SERVER,
    async init(){
        let data = await this.store.findAll("music");
        console.log(data);
    },
    actions: {
        computeTimestamp(){
            console.log("data");
        }
    }
});
