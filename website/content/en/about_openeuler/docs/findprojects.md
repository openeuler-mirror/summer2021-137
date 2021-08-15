## How can I find projects interested?

### Question

I am an developer, and I would join openEuler, but how can I find the projects interested? 

### Reply

The question includes the following scenarios. 

#### 1. I want to know the existing project teams, and what software they maintain.

In openEuler community, the project teams are named as SIG (Special Interest Group).

Please visit <https://openeuler.org/en/> and select the menu *COMMUNITY* - *SIG* , you will find the all the existing SIGs.

Take the example of SIG *Infrastructure*, find this name in the page, and you can find Homepage link <https://gitee.com/openeuler/community/tree/master/sig/Infrastructure>. Click the link and you can find the introduction to the SIG, including the projects. 

#### 2. I know one project name but I don't know which SIG takes care of it.

If you know the project name, please visit <https://gitee.com/openeuler/community/blob/master/sig/sigs.yaml>, and search with the name. For example you want to work on *gcc*, by searching *gcc*, you can find 

```
- name: Compiler
  repositories:
  - src-openeuler/gcc
  - src-openeuler/openjdk-1.8.0
```

The SIG name is Compiler.

#### 3. who should I contact when I want to join the SIG?

Let's continue to use the example of *gcc*. You have found that the SIG is *Compiler*. Please go to <https://openeuler.org/en/sig.html> to find Compiler. 

Then you will find 

```
Mailing list: dev@openeuler.org
IRC Channel: #openeuler-dev
Maintainers: jdkboy,zhuchunyi,jvmboy,
Homepage: https://gitee.com/openeuler/community/tree/master/sig/Compiler

```

Now you have found the mailing list <dev@openeuler.org>. 

In addition, visit the file *OWNERS* under the homepage <https://gitee.com/openeuler/community/tree/master/sig/Compiler>, and you can find all the gitee id of the maintainers of the SIG. 

```
- jdkboy
- zhuchunyi
- jvmboy

```

***TIPS***: gitee.com/ID above is profile of the maintainer.