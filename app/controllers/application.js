import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        del() {
            console.log("COUCOU");
            this.get('model').deleteRecord();
            this.transitionToRoute('');
            this.get('model').save();

        }
    }
});
