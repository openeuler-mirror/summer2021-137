## Brief

This doc will guide anyone who is going to add/modify the news content in our website. all workflow will follow the PR flow. please refer to [CONTRIBUTING](../CONTRIBUTING.md) for deep guiding if you are not fimiliar to how to submit a PR. 

All contents in this website are written in Markdown syntax. if you are beginner to Mardown, [Tutorial](https://www.markdowntutorial.com/) would be a good start to you. for news, it also write in markdown with a special header definition.

### Content & Structure

A news contains following parties, we strongly recommend you prepare all of these items without any blank:

- banner: An image reprents the ocurring sinario will be showed as a header in news list page. we recommend to use standard size with 1000*750 for better showing.
- title:  The brief introduction of the new
- description: A more detailed introduction than title for the news. 
- author: who provides the news content.
- categories: the category where user can find it easily.
- date: the news ocurring time.
- content: the detailed introduction for the stroy. 

All above content except banner image will be defined in one file under ```content/``` folder with Markdown syntax but banner image content should be submitted into ```static/img/``` folder and defined in the file. as multilingual content supported now, so please check which language are you going to add in, this will decide which sub-folder under ```content``` will be choosed. e.g. ```content/en```, ```content/zh``` or other further languages supported.  the final path where the file would be located is ```content/<lang-code>/news```. 

so, the folder structure would be:

.
+--content
|  +--en
|  |  +--news
|  |  |  +--my-news.md
+--static
|  +--img
|  |  +--my-news-banner.png

***Note***: content file must locates under ```news``` folder. however banner iamge can locates whatever sub-dir you want, but be sure you have configuration the path correctly. please step to next section for more file style.

### Header definition

A news file content two parties, one is the header configuration, another is the content. the header definition starts and end with ```+++``` or ```---```. Note: the sign number must be ***3***. e.g.

```
+++
title = "openEuler community meetup held in Shanghai"
date = "2019-10-10T13:50:46+02:00"
categories = ["meetup"]
author = "openEuler"
description = "The first meetup held in shanghai, there are more 500+ attenders joined this meetup."
banner = "img/banners/banner-1.jpg"
+++
```

***Note***:
- banner: a path starts with ```img```.
- categories: mutil-value supports, this value is a list of strings, echo one is a category.
- date: we recommend flowing the example style.

the remain content following the header definition is the news characters. 

### Example

```
+++
title = "openEuler community meetup held in Shanghai"
date = "2019-10-10T13:50:46+02:00"
categories = ["meetup"]
author = "openEuler"description = "The first meetup held in shanghai, there are more 500+ attenders joined this meetup."
banner = "img/banners/banner-1.jpg"
+++


10th, Oct, 2019. openEuler held the first meetup in Shanghai, China. the chairman Mr.Li has a wonderful speech and give us a good blueprint that openEuler will reach out.....
```


### Getting Help

Please contact the infrastructure team if meeting any question:

- Mail: infra@openeuler.org
- IRC: #openEuler-infra

