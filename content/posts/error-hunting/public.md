---
title: Error Hunting
date: 2023-03-05T16:31:11.004Z
image: /public/wallpaperflare.com_wallpaper.jpg
author: saqib-shafiq
"": /hello/
summary: Programming
summary-details: >-
  

  If `rmse_list` is not being appended to, there may be a few potential issues:


  1. `rmse_list` may not have been initialized before the loop where the `append()` method is being called. Make sure to initialize `rmse_list` before the loop using `rmse_list = []`.

  2. There may be an error occurring earlier in the code that is causing the loop to terminate prematurely, before `append()` is called. Check for any errors or exceptions that are being raised.

  3. It's possible that the value of `rmse` is not being computed correctly or is always the same, which would result in the same value being appended to the list every time. You can try printing out the value of `rmse` to see if it's changing as expected.
---
