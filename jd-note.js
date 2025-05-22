// ==UserScript==
// @name         京东购物车商品备注
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  为京东购物车商品添加持久化备注标签
// @author       https://space.bilibili.com/32200385
// @match        https://cart.jd.com/cart_index*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // 自定义样式
    const style = document.createElement('style');
    style.textContent = `
        .remark-container {
            margin-top: 8px;
            color: #e4393c;
            font-size: 12px;
            cursor: pointer;
            padding: 2px 5px;
            border-radius: 3px;
            background-color: #fff7f8;
            border: 1px solid #ffd6d8;
        }
        .remark-container:hover {
            background-color: #ffeef0;
        }
    `;
    document.head.appendChild(style);

    // 初始化备注系统
    function initRemarks() {
        // 使用MutationObserver监听DOM变化
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) {
                    processItems();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // 初始处理
        processItems();
    }

    // 处理所有商品项
    function processItems() {
        document.querySelectorAll('div.item-item[data-sku]').forEach(item => {
            const sku = item.dataset.sku;
            const pPropsDiv = item.querySelector('.cell.p-props');

            // 防止重复添加
            if (!pPropsDiv.querySelector('.remark-container')) {
                // 创建备注容器
                const remarkDiv = document.createElement('div');
                remarkDiv.className = 'remark-container';
                remarkDiv.textContent = GM_getValue(`remark_${sku}`, '双击添加备注');

                // 添加双击事件
                remarkDiv.addEventListener('dblclick', function() {
                    const remark = prompt('请输入商品备注:', GM_getValue(`remark_${sku}`) || '');
                    if (remark !== null) {
                        GM_setValue(`remark_${sku}`, remark.trim());
                        this.textContent = remark.trim() || '双击添加备注';
                    }
                });

                pPropsDiv.appendChild(remarkDiv);
            }
        });
    }

    // 等待购物车加载完成
    const checkExist = setInterval(() => {
        if (document.querySelector('.item-item')) {
            clearInterval(checkExist);
            initRemarks();
        }
    }, 500);
})();
