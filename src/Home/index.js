import {observer} from 'mobx-react';
import {action} from 'mobx';

import Background from './components/Background';
import ThemeStore from './models/theme';

export default class Home extends React.Component {

    themeStore = new ThemeStore();

    generateRandomColor() {
        /*
        const randomInt = Math.floor(Math.random(0, 1) * 5);
        const colors = ['red', 'yellow', 'green', '#fff', '#000'];
        const color = colors[randomInt];
        */

        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]; //如何生成从n到m的整数
        }
        return color;
    }

    changeBackgroundColor() {
        const color = this.generateRandomColor();
        this.themeStore.changeBackground(color);
    }

    render () {
                
        return (
            <Background themeStore={this.themeStore}> 
                <button style={{color: '#333', fontWeight: 500, paddingLeft: 5}} onClick={() => this.changeBackgroundColor()} > click me to change the background</button>
            </Background>
        );
    }
}


