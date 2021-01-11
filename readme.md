```

cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/abitwordsy.blog/

node ./node_modules/batch-image-resizer/bin/batch-image-resizer.js -i ./images/ -o ./docs/images/ -s "[960, 1920]"

eleventy --serve --quiet --passthroughall

```