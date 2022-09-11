# be-current

be-current help keep the element it adorns up-to-date with the current entry of navigation state.

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
        "vft": "currentEntries.getState|.cotus.house.impeachmentCount"
    }
}'></cotus-potus>
```


