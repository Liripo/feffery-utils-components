# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyDraggable(Component):
    """A FefferyDraggable component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    设置内部元素.

- id (string; optional):
    组件id.

- className (string; optional):
    当前可拖拽组件css类名.

- draggable (boolean; default True):
    是否开启可拖拽  默认：True.

- initialX (number; required):
    必填，设置初始状态下当前可拖拽组件左上角距离页面顶端的像素距离.

- initialY (number; required):
    必填，设置初始状态下当前可拖拽组件左上角距离页面左侧的像素距离.

- key (string; optional):
    强制刷新用.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional):
    当前可拖拽组件css样式.

- x (number; optional):
    只读，用于监听当前可拖拽组件左上角距离页面顶端的像素距离.

- y (number; optional):
    只读，用于监听当前可拖拽组件左上角距离页面左侧的像素距离."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_utils_components'
    _type = 'FefferyDraggable'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, draggable=Component.UNDEFINED, initialX=Component.REQUIRED, initialY=Component.REQUIRED, x=Component.UNDEFINED, y=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'draggable', 'initialX', 'initialY', 'key', 'loading_state', 'style', 'x', 'y']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'draggable', 'initialX', 'initialY', 'key', 'loading_state', 'style', 'x', 'y']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['initialX', 'initialY']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(FefferyDraggable, self).__init__(children=children, **args)
