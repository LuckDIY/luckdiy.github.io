import { defineConfig } from 'vitepress';

export default defineConfig({
    // 站点级选项
    title: 'luck_diy的小站',
    description: '描述',

    themeConfig: {
        // 主题级选项

        // 上右导航栏
        nav: [
            {text: 'Guide', link: '/guide', activeMatch: '/guide/what-is-vitepress'},
            {
                text: '下拉选择框',
                items: [
                    {text: 'options-1', link: '/'},
                    {text: 'options-2', link: 'http://www.baidu.com'}
                ]
            }
        ],

        socialLinks: [{icon: "github", link: "https://github.com/LuckDIY"}],


    },

    // 引入自定义 CSS
    /*css: {
        preprocessorOptions: {
            css: {
                additionalData: `@import "./styles/custom.css";`
            }
        }
    }*/

});