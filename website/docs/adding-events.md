## Brief

This doc will guide anyone who is going to add/modify the upcoming events content in this website. all workflow will follow the PR flow. please refer to [CONTRIBUTING](../CONTRIBUTING.md) for deep guide if you are not fimiliar to how to submit a PR. 

All contents in this website are written in Markdown syntax. if you are beginner to Mardown, [Tutorial](https://www.markdowntutorial.com/) would be a good start to you. for news, it also write in markdown with a special header definition.


***Note***: Add upcoming events is almost the as [Adding News](./adding-news.md)

### Content & Structure

An event contains following parties, we strongly recommend you prepare all of these items without any blank:

- banner: An image reprents the ocurring sinario will be showed as a header in event list page. we recommend to use standard size with 1000*750 for better showing.
- title:  The brief introduction of the event.
- description: A more detailed introduction than title for the event. 
- author: who provides the event content.
- categories: the category where user can find it easily.
- date: the event when will comming.
- content: the detailed introduction for the stroy. 

All above content except banner image will be defined in one file under ```content/``` folder with Markdown syntax but banner image content should be submitted into ```static/img/``` folder and defined in the file. as multilingual content supported now, so please check which language are you going to add in, this will decide which sub-folder under ```content``` will be choosed. e.g. ```content/en```, ```content/zh``` or other further languages supported.  the final path where the file would be located is ```content/<lang-code>/events```. 

so, the folder structure would be:

.
+--content
|  +--en
|  |  +--events
|  |  |  +--next-event.md
+--static
|  +--img
|  |  +--my-evnet-banner.png

***Note***: content file must locates under ```events``` folder. however banner iamge can locates whatever sub-dir you want, but be sure you have configuration the path correctly. please step to next section for more file style.

### Header definition

A event file content two parts, one is the header configuration, another is the content. the header definition starts and end with ```+++``` or ```---```. 

***Note***: the sign number must be ***3***. e.g.

```
+++
title = "openEuler community meetup will hold in Shanghai"
date = "2019-10-10T13:50:46+02:00"
categories = ["meetup"]
author = "openEuler"
description = "The first meetup will hold in shanghai, we appreciate if you can join us."
banner = "img/banners/banner-1.jpg"
+++
```

***Note***:
- banner: a path starts with ```img```.
- categories: mutil-value supports, this value is a list of strings, echo one is a category.
- date: we recommend flowing the example style.

the remain content following the header definition is the event characters. 

### Example

```
+++
title = "openEuler community meetup will hold in Shanghai"
date = "2019-10-10T13:50:46+02:00"
categories = ["meetup"]
author = "openEuler"
description = "The first meetup will hold in shanghai, please join us if you are interested in it, wish we have a productive meeting."
banner = "img/banners/banner-1.jpg"
+++


10th, Oct, 2019. openEuler will hold the first meetup in Shanghai, China. there are more than 50 topic will share in the meetup which related the whole OS domain and the new blueprint will be dissced in this meeting...
```


### Getting Help

Please contact the infrastructure team if meeting any question:

- Mail: infra@openeuler.org
- IRC: #openeuler-infra on freesnode.net
- Issue: https://gitee.com/openeuler/website/issues please search if it was already existing before open a new issue.

