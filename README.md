# React native 

This projects is for react-native-ts practice

## View Styles

- backgroundColor : 'red',  背景色
- width:100, 寬
- height:100, 高
- top:100, 上
- bottom : 100 , 下
- left : 100, 左
- reight : 100, 右
- flex : 1, 比例, ! need check
- flexDirection:  排列方向
- justifyContent: 與主類別方向調整
- alignItems: 與主類別反方向調整
- useState: 回傳 data 給呼叫此 function 的方法

## Issues

- [iOS Build Error with react-native version - 0.64.0](https://github.com/facebook/react-native/issues/31259)

  Solved: I'm using NVM and had the same issue for now I changed the file node_modules/react-native/scripts/find-node.sh adding before set -e:

   
    unset npm_config_prefix
    unset PREFIX