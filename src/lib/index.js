/* eslint-disable import/prefer-default-export */
import FefferyCaptcha from "./components/FefferyCaptcha.react";
import FefferySyntaxHighlighter from "./components/FefferySyntaxHighlighter.react";
import FefferyTopProgress from "./components/FefferyTopProgress.react"
import FefferyShortcutPanel from "./components/FefferyShortcutPanel.react"
import FefferyGuide from "./components/FefferyGuide.react"
import FefferySplit from "./components/split/FefferySplit.react";
import FefferySplitPane from "./components/split/FefferySplitPane.react"
import FefferyExecuteJs from "./components/FefferyExecuteJs.react";
import FefferyScroll from "./components/FefferyScroll.react";
import FefferyScrollbars from "./components/FefferyScrollbars.react";
import FefferyExtraSpinner from "./components/FefferyExtraSpinner.react";
import FefferyLazyLoad from "./components/FefferyLazyLoad.react";
import FefferyVirtualList from "./components/FefferyVirtualList.react";
import FefferyLocation from "./components/FefferyLocation.react";
import FefferyDiv from "./components/listeners/FefferyDiv.react";
import FefferyInViewport from "./components/listeners/FefferyInViewport.react";
import FefferyHexColorPicker from "./components/colorPickers/FefferyHexColorPicker.react";
import FefferyRgbColorPicker from "./components/colorPickers/FefferyRgbColorPicker.react";

/* 
忽略部分设计React中规范的console警告信息
目前已知无关警告信息：
1. 数组推导形成的组件，每个子组件需要唯一的key
*/
const backup = console.error;
console.error = (msg) => {
    const supressedWarnings = [
        'Each child in a list should have a unique'
    ];

    if (!supressedWarnings.some(entry => msg.includes(entry))) {
        backup.apply(console, arguments);
    }
};

export {
    FefferyCaptcha,
    FefferySyntaxHighlighter,
    FefferyTopProgress,
    FefferyShortcutPanel,
    FefferyGuide,
    FefferySplit,
    FefferySplitPane,
    FefferyExecuteJs,
    FefferyScroll,
    FefferyScrollbars,
    FefferyExtraSpinner,
    FefferyDiv,
    FefferyLazyLoad,
    FefferyVirtualList,
    FefferyLocation,
    FefferyInViewport,
    FefferyHexColorPicker,
    FefferyRgbColorPicker
};