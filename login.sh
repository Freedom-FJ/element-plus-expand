#!/usr/bin/env bash
npm config get registry
npm config set registry=https://registry.npmjs.org
# echo "请进行登录操作"
# npm login


# echo "-------publishing------"
# npm publish
# npm config set registry=http://registry.npmmirror.com
# echo "发布完成"
# exit

# "-------问题-------"
# 1 zsh: permission denied: ./end.sh
# 解决运行：chmod u+x *.sh 增加权限