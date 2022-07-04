#### 配置全局用户名（不会和GitHub用户名影响 提交时显示的用户名而已）

git config --global user.name 用户名

#### 配置全局用户邮箱（不会和GitHub邮箱影响）

git config --global user.email 邮箱

#### git init 初始化仓库得到一个.git的文件

git init

#### 查看本地仓库状态

git status

#### master主人 默认主分支

#### git Bash Here 里面的命名可以使用Linux命名 git本就是linux大神用c语言开发的

ll 查看
ll -a 查看隐藏文件
p复制

car 文件名（查看文件内容）

#### 添加文件到4暂存区 文件名写成 . 的时候默认全部文件

git add 文件名

#### 删除暂存区文件 cached缓存

git rm --cached 文件名

#### 撤销恢复暂存区被删除的文件

git checkout -- 文件名1 文件名2 文件名n

#### 提交到本地库

git commit -m "提交信息" 文件名

#### 撤销版本提交（已经执行过 commit ）

#### 回到上个版本

只撤销版本

git reset HEAD^

撤销版本和该版本后所有的操作

git reset HEAD^ --hard

#### 跳转到指定版本

只撤销版本

git reset 版本号

撤销版本和该版本后所有的操作

git reset 版本号 --hard

#### 查看提交信息 简约版（简写的提交版本号 分支 提交备注信息）

git reflog

#### 查看提交信息 完整版（详细的提交版本号 分支 提交人的名字 邮箱 提交时间 提交备注信息）

git log

#### 查看分支名 .git文件里面的HEAD文件 

#### 查看当前文件版本号 .git文件里面的ref文件里面的heads文件里面的master文件

#### git 历史版本号穿梭 修改本地文件版本内容 hard坚固的

git reset --hard 版本号

#### 创建分支 branch树支（会复制当前分支暂存区文件到新分支）

git branch 分支名

#### 查看分支

git branch -v

#### 切换分支（不会改变各个分支内容）

git checkout 分支名

#### 合并分支 merge合并

git merge 分支名

#### 冲突合并分支（两个分支在同一个文件同一个位置修改后git无法合并 需要手动合并）

合并分支时 手动修改文件决定留谁 然后添加到暂存区 提交为一次版本（注意冲突合并提交时不写文件名）

#### 删除分支

git branch -d 分支名

#### 创建并切换到当前分支

git checkout -b 分支名

#### 将分支推送到远程仓库

git push --set-upstream 别名(仓库地址) 分支名

#### 查看当前所有远程地址别名 remote远程的、遥远的

git remote -v

#### 添加远程库并起别名

git remote add 别名 远程地址

#### 推送到远程库

git push 别名(远程地址)  分支名

#### 对指定的仓库分支推送并保持连接默认推送

git push -u 别名(远程地址)  分支名

#### 拉取远程代码

git pull 别名(远程地址)  分支名

#### 克隆远程代码 拉取代码 初始化本地仓库 创建别名origin起源

git clone 仓库链接(ssh)

#### 推送代码到远程 非本人账号推送代码需要本人发送邀请合作函 接收者输入邀请函地址同意后方可继续

git push 别名(远程地址)  分支名

#### 跨团队协作 输入目标团队的地址 拷到自己的远程库 进行操作 最后提交给目标团队 目标团队审核后处理 合并分支

#### 配置ssh密钥

打开 Git Bash

输入ls -al ~/.ssh以查看是否存在现有的 SSH 密钥

输入 ssh-keygen -t ed25519 -C "邮箱" 创建公钥

输入cat ~/.ssh/id_ed25519.pub查看公钥文件

电脑里面会有个 .ssh 的文件

在GitHub上添加公钥即可进行本电脑与远程库免密操作

#### Gitee链接GitHub 只需要Gitee里面导入仓库 输入GitHub仓库https地址 强制刷新即可同步GitHub仓库 

 








