import {defineConfig} from 'vitepress';

export default defineConfig({
    // 站点级选项
    title: 'luck_diy的小站',
    description: '描述',

    head: [["link", {rel: "icon", href: "./主页.svg"}]],

    themeConfig: {
        // 主题级选项
        outline: {label: '文章目录', level: [2, 6]},
        // sidebar: false, // 关闭侧边栏
        aside: "left", // 设置右侧侧边栏在左侧显示

        // 上右导航栏
        nav: [
            {
                text: 'Guide',
                link: '/guide', activeMatch: '/guide/what-is-vitepress'},
            {
                text: 'Spring源码学习',
                items: [
                    {text: 'BeanDefinition', link: '/Spring/BeanDefinition'},
                    {text: 'options-2', link: 'http://www.baidu.com'}
                ]
            },
            {
                text: 'SSO单点登陆',
                items: [
                    {text: 'SAML', link: '/sso/saml'},
                ]
            },
            /*{
                text: '任务', items: [
                    {text: '0722', link: '/task/0722'},
                    {text: '0723', link: '/task/0723'},
                    {text: '0724', link: '/task/0724'},
                    {text: '0725', link: '/task/0725'},
                    {text: '0726', link: '/task/0726'},
                    {text: '0729', link: '/task/0729'},
                    {text: '0730', link: '/task/0730'},
                    {text: '0731', link: '/task/0731'},
                    {text: '0801', link: '/task/0801'},
                    {text: '0802', link: '/task/0802'},
                    {text: '0805', link: '/task/0805'},
                    {text: '0806', link: '/task/0806'},
                    {text: '0807', link: '/task/0807'},
                    {text: '0808', link: '/task/0808'},
                    {text: '0809', link: '/task/0809'},
                ]
            },*/
            {
                text: '工具',
                items: [
                    {text: 'JSON格式化', link: 'tools/json-formatter'},
                ]
            },


        ],

        socialLinks: [{icon: "github", link: "https://github.com/LuckDIY"}],


        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
    },


});