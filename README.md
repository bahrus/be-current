# be-current

be-current help keep the element it adorns up-to-date with the current entry of navigation state.

<a href="https://nodei.co/npm/be-current/"><img src="https://nodei.co/npm/be-current.png"></a>

Size of package, including custom element behavior framework (be-decorated):

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-current?style=for-the-badge)](https://bundlephobia.com/result?p=be-current)

Size of new code in this package:

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-current?compression=gzip">

```html
<cotus-house be-transactional='{
    "impeachmentCount:onSet": {
        "path": "cotus.house.impeachmentCount",
        "valueFromTarget": "impeachmentCount",
    }
}'></cotus-house>


<cotus-potus be-current='{
    "impeachmentCount" : "cotus.house.impeachmentCount"
}'></cotus-potus>
```

which is shorthand for:

```html
<cotus-potus be-current='{
    "impeachmentCount" : {
        "eventFilter": {
            "info":{
                "path": "cotus.house.impeachmentCount"
            }
        },
        "observeWinObj": "navigation",
        "on": "navigate",
        "vft": "currentEntry.getState|.cotus.house.impeachmentCount"
    }
}'></cotus-potus>
```

[polyfill](https://www.npmjs.com/package/navigation-polyfill)
[guide](https://developer.chrome.com/docs/web-platform/navigation-api)


