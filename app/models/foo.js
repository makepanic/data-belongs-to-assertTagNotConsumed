import Model from '@ember-data/model';
import DS from "ember-data";

export default class FooModel extends Model {
  @DS.belongsTo('bar', { async: true }) bar;
}
