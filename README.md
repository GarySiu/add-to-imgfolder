# add-to-imgfoldr
Quick and dirty chrome extension to add imgfoldr.com markup to imgur comments
## How do I install this?
1. Download the zip file from the [releases page](https://github.com/GarySiu/add-to-imgfoldr/releases)
2. Unzip it somewhere
3. Go to your chrome extensions page - chrome://extensions/ or just go through the menu
4. Check the _Developer Mode_ box
5. Click _Load unpacked extension_ and select the folder
6. You should now see an extra link when you go to imgur:
![screenshot](http://i.imgur.com/Nz2yJc6.png)
## Why can't I just download it from the Chrome webstore?
Because I'm too cheap to pay $5 for something that took 10 mins to write and should
really just be a userscript in [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
## It's buggy!
Yeah. imgur uses React which doesn't like it when something else manipulates the page directly.
If you want to contribute some code though I'm open to PRs!
