import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  Inflector.inflector.irregular('base', 'bases');
}

export default {
  initialize
};
