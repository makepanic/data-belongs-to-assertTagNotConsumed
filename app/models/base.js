import Model from '@ember-data/model';
import DS from 'ember-data';

export default class BaseModel extends Model {
  @DS.belongsTo('foo', { async: true }) foo;
}
