import Model from '@ember-data/model';
import DS from "ember-data";

export default class FooModel extends Model {
  @DS.attr('string') name;

  @DS.belongsTo('bar', { async: true }) bar;
}
