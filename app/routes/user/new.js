import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        console.log("CECI EST UN TEST");
    },
    model() {

    }
});
