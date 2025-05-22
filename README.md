# jd-note
京东购物车商品备注，跨设备同步的Tampermonkey脚本(非自动，需要借助Tampermonkey备份手动同步，可以用Dropbox、Google网盘等)，通过GM_setValue和GM_getValue持久储存备注。

![image](https://github.com/user-attachments/assets/8bbeda9a-bbf8-4ff5-bdaf-5a43cdfd6488)


# Tampermonkey是什么？怎么用？
### 直接Chrome/Edge应用商店安装（需要魔法上网）
Chrome浏览器：https://chromewebstore.google.com/

Edge浏览器：https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home
直接搜Tampermonkey安装即可
### “我不会魔法上网”
布什戈门，那你怎么到这里来的？
没事，https://www.bilibili.com/video/BV16h4y1n7zr

# 使用方法
![image](https://github.com/user-attachments/assets/27c4be80-8c54-4b55-9716-6ca277061f08)

新建一个空白的Tampermonkey脚本。

![image](https://github.com/user-attachments/assets/9f7c87c8-0350-4fa9-9238-9405e611cd6b)

直接把jd-note的内容复制粘贴进Tampermonkey脚本

![image](https://github.com/user-attachments/assets/c80e36c4-11d4-4464-a0bd-711d56714d72)

记得要启用Tampermonkey和jd-note

# 跨设备同步
![image](https://github.com/user-attachments/assets/54d99475-1a36-4bf0-92be-d22ea6d7e3da)

设备A打开Tampermonkey设置>>实用工具>>云>>导出，可选同步方案有GoogleDrive、Dropbox、OneDrive、Yandex.Disk、WebDAV，国内推荐Onedrive。
设备B打开Tampermonkey设置>>实用工具>>云>>显示备份，选择刚刚备份的文件。


