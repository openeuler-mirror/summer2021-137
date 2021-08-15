## 我如何才能找到感兴趣的项目？

### 问题

我是一个开发者，我想加入openEuler社区，但我如何找到我感兴趣的项目？

### 回答

这个问题包括了如下几种场景：

#### 1. 我想找到当前存在的项目组有哪些，以及他们维护的项目

在openEuler社区，项目组是以SIG(Special Interest Group)的术语来表述的。

请访问<https://openeuler.org/zh/>，点击菜单*社区* - *SIG*，你可以找到所有存在的SIG。

以*Infrastructure* SIG为例，在本页搜索*Infrastructure*，可以看到这个项目的主页链接 <https://gitee.com/openeuler/community/tree/master/sig/Infrastructure>。点击链接可以看到这个SIG的介绍，包括所维护的项目的介绍。

#### 2. 我知道软件名称，但我想找到哪个SIG维护这个项目

如果你知道软件名称，则可以访问<https://gitee.com/openeuler/community/blob/master/sig/sigs.yaml>，用名称搜索，例如你想知道*gcc*由哪个SIG维护，搜索*gcc*可以找到如下片段: 

```
- name: Compiler
  repositories:
  - src-openeuler/gcc
  - src-openeuler/openjdk-1.8.0
```

这个SIG组的名称是Compiler.

#### 3. 我想加入某个SIG，应该联系谁？

我们继续以*gcc*软件为了，你想维护该软件，并且找到了所属SIG是*Compiler*。请访问<https://openeuler.org/zh/sig.html>页面并搜索*Compiler*，你可以找到如下信息

```
邮件列表频道: dev@openeuler.org
IRC频道: #openeuler-dev
管理员: jdkboy,zhuchunyi,jvmboy,
首页: https://gitee.com/openeuler/community/tree/master/sig/Compiler

```

你可以给<dev@openeuler.org>发邮件联系。

此外，访问首页<https://gitee.com/openeuler/community/tree/master/sig/Compiler>下的*OWNERS*文件，你还能找到该SIG的Maintainers。

```
- jdkboy
- zhuchunyi
- jvmboy

```

***提示***: 用这里每一行的ID可以拼接gitee.com/ID，就是对应Maintainer的个人首页了。

