// ==UserScript==
// @name         关闭 Minecraft 官网弹出提示
// @namespace    http://muyangplus.github.io
// @version      0.1
// @description  关闭中国地区 Minecraft 官网弹出的提示信息。
// @author       muyangplus
// @match        https://www.minecraft.net/*
// @icon         https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/favicon-32x32.png
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.getElementById("popup-btn").click();
})();