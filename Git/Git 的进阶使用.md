# Git 的进阶使用
123
## 介绍
用于版本控制的测试。

## Git 常用命令 

### 基本命令

#### 初始化仓库

```powershell
git init
```

#### 添加到暂存区

```powershell
git add .
# 或者
git add 文件名1 文件名2 文件名n
```

#### 提交为一个版本

```powershell
git commit -m "注释的内容"
```

#### 添加远程仓库地址

```powershell
git remote add 仓库别名 URL地址
# 如
 git remote add origin git@gitee.com:aulence/test.git
```

#### 推送到远程

默认推送
```powershell
git push
```

默认到指定的别名和分支
```powershell
git push 别名 分支名
# 如
git push origin master
```

对指定的仓库分支推送并保持连接
默认推送
```powershell
git push -u origin master
```

#### 查看仓库状态

```powershell
git status
```

### 版本控制命令

#### 查看版本日志

```powershell
# 完成查看
# 使用 Enter 查看未完整显示的日志
# 输入 wq 退出日志
git log

# 查看单行日志（精简版）
git log --oneline

# 查看单行日志
git log --pretty=oneline
```

#### 撤销恢复暂存区被删除的文件

```powershell
git checkout -- 文件名1 文件名2 文件名n
```

#### 撤销文件暂存（已经执行过 add ）

```powershell
git rm --cached 文件名1 文件名2 文件名n
```

#### 撤销版本提交（已经执行过 commit ）

回到上个版本
```powershell
# 只撤销版本
git reset HEAD^

# 撤销版本和该版本后所有的操作
git reset HEAD^ --hard
```

跳转到指定版本
```powershell
# 只撤销版本
git reset 版本号

# 撤销版本和该版本后所有的操作
git reset 版本号 --hard
```

#### 删除推送的内容（已经执行过 push ）
A. 如果是删除文件，则删除文件本地文件后按常规流程推送即可
B. 如果是撤销修改文件
1. 在本地撤销回上一个版本
2. 使用 `git push -f` 强制推送

#### 查看“未来”的版本

```powershell
git reflog

```

### 分支和团队管理命令（以分支名 dev 为例）

#### 创建分支

```powershell
git branch dev
```

#### 切换分支

```powershell
git checkout dev
```

###  远程拉取到本地
 git pull origin 分支名


#### 合并分支

回到主分支后，执行：(本地合并)
```powershell
git merge dev
```

#### 删除分支

```powershell
git branch -d dev
```

#### 查看所有分支

```powershell
git branch
```

#### 创建并切换到当前分支

```powershell
git checkout -b dev
```

#### 将分支推送到远程仓库

```powershell
git push --set-upstream origin dev
```

