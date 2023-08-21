/**
 * 全局配置
 */
export const globalConfig = {
    // 初始主题（localStorage未设定的情况）
    initTheme: {
        // 初始为亮色主题
        dark: false,
        // 初始主题色
        // 与customColorPrimarys数组中的某个值对应
        // null表示默认使用Ant Design默认主题色或customColorPrimarys第一种主题色方案
        colorPrimary: null,
    },
    // 供用户选择的主题色，如不提供该功能，则设为空数组
    customColorPrimarys: [],
    // localStroge用户主题信息标识
    SESSION_LOGIN_THEME: 'asaBlogTheme',
    // localStroge用户登录信息标识
    SESSION_LOGIN_INFO: 'asaBlogLoginInfo',
}