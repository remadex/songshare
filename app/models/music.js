import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    autor: DS.attr(),
    path: DS.attr(),
    img: DS.attr(),
    year: DS.attr(),
    timestamp: DS.attr(),
    genre: DS.attr(),
    description: DS.attr()
});