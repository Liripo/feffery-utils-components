import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';

// 定义localStorage状态管理组件
const FefferyLocalStorage = (props) => {
    // 取得必要属性或参数
    const {
        id,
        data,
        initialSync,
        setProps,
        loading_state
    } = props;

    useEffect(() => {
        const syncStorage = (e) => {
            if (e.triggerKey === id) {
                const existsData = localStorage.getItem(id);
                if (existsData) {
                    setProps({
                        data: JSON.parse(existsData)
                    });
                }
            }
        }

        window.addEventListener(
            "localStorageSetItem",
            syncStorage
        );

        return () => {
            window.removeEventListener("localStorageSetItem", syncStorage);
        };
    }, []);

    useEffect(() => {
        if (initialSync) {
            const existsData = localStorage.getItem(id);
            if (existsData) {
                setProps({
                    data: JSON.parse(existsData)
                });
            }
        }
    }, [])

    useEffect(() => {
        if (!isUndefined(data)) {
            localStorage.setItem(id, JSON.stringify(data))
        }
    }, [data])

    return <></>;
}


// 定义参数或属性
FefferyLocalStorage.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string.isRequired,

    /**
     * 设置或监听当前id对应的localStorage数据
     */
    data: PropTypes.any,

    /**
     * 设置初始化时是否从localStorage中尝试读取id对应的值并更新到data中
     * 默认：false
     */
    initialSync: PropTypes.bool,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

// 设置默认参数
FefferyLocalStorage.defaultProps = {
    initialSync: false
}

export default FefferyLocalStorage;