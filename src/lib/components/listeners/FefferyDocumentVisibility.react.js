import React, { useEffect } from 'react';
import { useDocumentVisibility } from 'ahooks';
import PropTypes from 'prop-types';

// 定义页面可见性检查组件FefferyDocumentVisibility
const FefferyDocumentVisibility = (props) => {

    const {
        id,
        setProps,
        loading_state
    } = props;

    const _documentVisibility = useDocumentVisibility();

    useEffect(() => {
        setProps({ documentVisibility: _documentVisibility })
    }, [_documentVisibility]);

    return (<div
        id={id}
        data-dash-is-loading={
            (loading_state && loading_state.is_loading) || undefined
        } />);
}

// 定义参数或属性
FefferyDocumentVisibility.propTypes = {
    // 部件id
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    // 监听页面是否可见
    documentVisibility: PropTypes.oneOf(['visible', 'hidden']),

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
    })
};

// 设置默认参数
FefferyDocumentVisibility.defaultProps = {
}

export default React.memo(FefferyDocumentVisibility);