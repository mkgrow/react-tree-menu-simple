export default [
    {
        text : '一级菜单-1'
    },
    {
        text : '一级菜单-2',
        className : 'multi-second-list sub-menu',
        children : [
            {
                text : '二级菜单-1'
            },  
            {
                text : '二级菜单-2'
            },
            {
                text : '二级菜单-3'
            },
            {
                text : '二级菜单-4',
                className : 'multi-third-list sub-menu',
                children : [
                    {
                        text : '三级菜单-1'
                    },
                    {
                        text : '三级菜单-2',
                    },
                    {
                        text : '三级菜单-3'
                    },
                    {
                        text : '三级菜单-4'
                    },
                    {
                        text : '三级菜单-5',
                        className : 'multi-third-list sub-menu',
                        children : [
                            {
                                text : '四级菜单-1'
                            },
                            {
                                text : '四级菜单-2',
                                children : [
                                    {
                                        text : '五级菜单-1'
                                    },
                                    {
                                        text : '五级菜单-2',
                                    },
                                    {
                                        text : '五级菜单-3',
                                        children : [
                                            {
                                                text : '六级菜单-1'
                                            },
                                            {
                                                text : '六级菜单-2',
                                                children : [
                                                    {
                                                        text : '七级菜单-1'
                                                    },
                                                    {
                                                        text : '七级菜单-2',
                                                    },
                                                    {
                                                        text : '七级菜单-3'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text : '四级菜单-3'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
