/* eslint-disable import/prefer-default-export */
import FefferyCaptcha from "./components/FefferyCaptcha.react";
import FefferySyntaxHighlighter from "./components/FefferySyntaxHighlighter.react";
import FefferyTopProgress from "./components/FefferyTopProgress.react"
import FefferyShortcutPanel from "./components/FefferyShortcutPanel.react"
import FefferyGuide from "./components/FefferyGuide.react"
import FefferySplit from "./components/split/FefferySplit.react";
import FefferySplitPane from "./components/split/FefferySplitPane.react"
import FefferyExecuteJs from "./components/FefferyExecuteJs.react";
import FefferyCircleColorPicker from "./components/colorPickers/FefferyCircleColorPicker.react";
import FefferyScroll from "./components/FefferyScroll.react";
import FefferyScrollbars from "./components/FefferyScrollbars.react";

// 屏蔽所有warning信息
window.console = (function () {
    var c = {};
    c.warn = function () { };
    return c;
})();

export {
    FefferyCaptcha,
    FefferySyntaxHighlighter,
    FefferyTopProgress,
    FefferyShortcutPanel,
    FefferyGuide,
    FefferySplit,
    FefferySplitPane,
    FefferyExecuteJs,
    FefferyCircleColorPicker,
    FefferyScroll,
    FefferyScrollbars
};