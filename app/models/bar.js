import Model from '@ember-data/model';
import DS from 'ember-data';

export default class BarModel extends Model {
  @DS.attr('string') name;
}
