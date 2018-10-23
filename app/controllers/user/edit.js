import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save: function () {
            this.get('model').save().then((data) => {
                console.log("ok edit")
                return this.transitionToRoute('user');
            })
        },
        del: function () {
            this.get('model').deleteRecord();
            this.get('model').save();
            return this.transitionToRoute('user');
        }
    }
});
