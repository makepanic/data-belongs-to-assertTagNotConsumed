import Component from '@ember/component';
import { computed } from '@ember/object';

export default class XFooComponent extends Component {
  @computed('base.foo.bar.name')
  get baseBar(){
    return this.get('base.foo.bar.name');
  }
}
