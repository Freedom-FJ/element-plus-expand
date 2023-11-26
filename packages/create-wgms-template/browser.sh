#!/bin/bash
  
# 如果在 macOS 上，请使用 open 命令
if [[ $(uname) == "Darwin" ]]; then
  open "https://npmmirror.com/sync/@ued_fpi/create-wgms-template"

# 如果在 Linux 上，请使用 xdg-open 命令
elif [[ $(uname) == "Linux" ]]; then
  xdg-open "https://npmmirror.com/sync/@ued_fpi/create-wgms-template"

# 如果没有上述操作系统，则给出错误消息
else
  echo "抱歉，此脚本仅适用于 macOS 和 Linux。"
  exit 1
fi

exit 0