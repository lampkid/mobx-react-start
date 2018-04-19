import { decorate, action, observable } from 'mobx';

export default class ThemeStore {
   backgroundColor = '#ff0';

   slogan = 'hello mobx';

   changeBackground(backgroundColor) {
     this.backgroundColor = backgroundColor;
   }

   changeSlogan(slogan) {
     this.slogan = slogan;
   }
}


decorate(ThemeStore, {
  backgroundColor: observable,
  slogan: observable,
  changeBackground: action,
  changeSlogan: action,
});

/*
 * another
export default class ThemeStore {
   @observable backgroundColor = '#ff0';

   @observable slogan = 'hello mobx';

   @action
   changeBackground(backgroundColor) {
       this.backgroundColor = backgroundColor;
   }

   @action
   changeSlogan(slogan) {
       this.slogan = slogan;
   }
}
*/
