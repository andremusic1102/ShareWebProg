
# HTML5 新Tag

基本上跟div一樣 只是好閱讀

<header>
顧名思義就是頭部，主要是用來放置網站的刊頭，固定會重覆出現的導覽、LOGO、站名等內容。

<footer>
尾部，包括頁尾，像是法律資訊或是作者訊息等等，不過<header>及<footer>都不是唯一的，在網頁中的同一個區域可以重覆使用。

<nav>

**導覽列**，像是選單之類用來導引使用到網站各個地方的，可以用<nav> 包起來，在裝置上的操作是可以直接跳過、跳是跳到這個段落然後跳選下一個連結。

<aside>
側欄，網頁中非主要區域的地方，常見放廣告及導覽、全站檢索的地方。

<article>
文章，意指一篇完整而可獨立抽出來閱讀的文章。

<section>
章節，表示相關但是不同的段落，段落tag裡也可以包<article>, <article>裡也可以包<section>主要的差別是語意上的。


# Font

引用google字體
    <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz' rel='stylesheet' type='text/css'>

後方參數可以替換為 Google Font Directory 上的任一字體）
然後針對需要修改字體的段落加入 CSS 片段、如：
```css
    h1 { font-family: 'Yanone Kaffeesatz', arial, serif; }
```








