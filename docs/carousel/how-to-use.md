---
id: how-to-use
title: How to Use
---

import { SubHeader } from "./subheader";

<SubHeader/>  

You can use it with any framework of your choice. Just make sure that all your carousel items have class `carouselItem`

Put the HTML in following manner

```
<carousel-component mode="MODE_ALTERNATE" template-id="carouselItems2">
  <div class="carouselItem">
      <img height="100px" width="100%"
      src="//via.placeholder.com/1000x100/FFFF00/000000/?text=Item+21"
      alt="" />
  </div>
  <div class="carouselItem">
      <img height="100px" width="100%"
      src="//via.placeholder.com/1000x100/FF0000/FFFFFF/?text=Item+22"
      alt="" />
  </div>
  <div class="carouselItem">
      <img height="100px" width="100%"
      src="//via.placeholder.com/1000x100/00FF00/000000?text=Item+23"
      alt="" />
  </div>
</carousel-component>
```

Notice that each child of `carousel-component` tag is having casouelItem class. This will be automated in upcoming versions.

### Options


| Option Name | Value/type | Purpose |
|-------------|-------|---------|
| mode        | MODE_ALTERNATE | The auto carousel keeps on alternating the direction once it reaches either end |
| mode        | MODE_INIFNITE  | The auto carousel kepps on moving in right direction always it loops the carousel items |
| mode        | MODE_RESTART   | The auto carousel will come back to first child once it reaches to last item to start over again | 
 speed        | Number         | Controls the speed of transition from one slide to another in seconds |