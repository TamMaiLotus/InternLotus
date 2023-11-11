# Topic 6: Bootstrap & Responsive Design
## Responsive:

**Các câu hỏi:**
- Tại sao lại không để web phụ thuộc vào 1 fixed width nhất định
- Tại sao trong ví dụ gridViewExample.html, phần styling của gridcontent, lại có tận 2 background-color, và dụng ý của nó,
- Khi nào sử dụng flex-grow, flex-shrink, flex-basis.
- align-item: baseline là thế nào?

**1. Khái niệm:**

Responsive design là các phương pháp sử dụng HTML/CSS để làm cho trang web nhìn tốt hơn với mọi thiết bị sử dụng

**2. Viewport:**

* Khái niệm: 
  * Viewport là khoảng màn hình của người dùng của một website, có thể thay đổi tuỳ theo kích cỡ của thiết bị đang sử dụng.
* Xây dựng: 
  * Với code có sẵn, thêm dòng này ở trong tag ```<head></head>```:
  ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
  * Với một đoạn code mới, người dùng có thể ấn ! rồi enter, đoạn html vừa generate sẽ có sẵn dòng setup viewport.
* Ví dụ:
  * Bức ảnh ko có tag viewport:
  [Không tag viewport](https://www.w3schools.com/html/example_withoutviewport.htm)
  * Bức ảnh có tag viewport: 
  [Có tag viewport](https://www.w3schools.com/html/example_withviewport.htm)
  Vói ví dụ trên, việc không có tag viewport sẽ làm cho màn hình trở nên khó chịu hơn (căn lề bé, ảnh không được phóng to) ở thiết bị mobile, trong khi các vấn đề đấy đều có thể fix được nếu để tag viewport.
* Lưu ý:
  * Không được setup các elements mà width của nó là dạng lớn mà fixed (VD: 1200px)
  * (?) Không được để trang web phụ thuộc vào một cái viewport width cụ thể để render tốt
  * Dùng CSS media queries để apply các styling khác nhau với các width khác nhau

**3. Grid view:**
* Khái niệm:
  * Các web đều phân ra thành từng cột và hàng để giúp design dễ dàng hơn trong việc đặt các elements trên trang.
  Ví dụ: [Grid View Example](gridViewExample.html)
* Cách build Responsive Grid View:
  * **Bước 1**: Thêm vào css dòng này trước:
  ```
  * {
    box-sizing: border-box;
  } 
  ```
  * Ví dụ phân 2 column với width khác nhau: 
  [Grid View 2 Column Example](gridViewTwoColumnExample.html)
  * Các css shorthand col-{x}:
    Nguyên tắc hoạt động:
    * Một màn hình có thể chia tối đa là 12 cột, tức width nhỏ nhất có thể đạt được là:
    ```col-x {x = 1} : width = 100% / 12 = 8.33%```
        Các x tiếp theo, cứ lấy 8.33% * x, sẽ ra được shorthand của width mong muốn:
        ```
        col-x {x = 2} : width = 8.33% * 2 = 16.66%
        col-x {x = 3} : width = 8.33% * 3 = 25%
        ...
        col-x {x = 11} : width = 8.33% * 11 = 91.66%
        col-x {x = 12} : width = 8.33% * 12 = 100%
        ```
        (Tra nhanh width: [col-x width shorthand](colxShorthand.txt))
    * Các row (column) nếu được phân ra thì tổng của nó phải luôn bằng 12 (100%), nếu không sẽ xảy ra thừa thãi.

**4. Media Queries:**
* Khái niệm: 
Media queries là các thuộc tính CSS sau khi đạt được điều kiện nhất định (giống if-clause)
Ví dụ: Nếu cửa sổ web ở 600px hoặc thấp hơn, background-color sẽ sang màu xanh: 
```
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
* Thêm breakpoint:
  Việc thêm breakpoint rất là quan trọng trong việc design cho từng loại thiết bị.
    * Setup width cho thiết bị di động: 
    ```
    [class*="col-"] {
        width: 100%;
    }
    ```
    * Shorthand col-s-{x} và col-m-{x}:
    Về -s- và -m-, nó tượng trưng cho loại thiết bị sẽ sử dụng, và css sẽ tự động đổi các thuộc tính sang nếu đạt điều kiện này ({x} tương tự như col- thường)
* Cấu trúc: 
```
@media ({your_condition_here}: {attribute_amount} {
    {your css code here}
})
```
Ví dụ: 
```
@media (max-width: 600px) {
  div.example {
    display: none;
  }
}
```
Đoạn code trên sẽ ẩn thuộc tính div.example đi nếu width của cửa sổ đạt 600px hoặc nhỏ hơn.

**5. Images**
* Setup Responsive Image:
```
img {
  max-width: 100%;
  height: auto;
}
```
* background-size:
  * contain: Ảnh sẽ cố fit trong vùng area, nhưng vẫn sẽ giữ ratio.
  * 100%: Ảnh sẽ kéo giãn sao cho fit area.
  * cover: Ảnh sẽ scale để fit area mà vẫn giữ ratio, tuy nhiên một phần ảnh sẽ bị clipped.

**6. Video**
* Setup Responsive Video: 
(Tương tử Image)

**7. Flexbox**
(Ref: [A Complete Guide to Flexbox - Css-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background))

* Cấu trúc: Đây là một container được đặt dưới định dạng flex:
![Ảnh](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)
Trong đó:
    * main axis: Trục chính của container nơi mà các item trong container được đặt. (Có thể thay đổi hướng dọc hay ngang tuỳ thuộc vào thuộc tính```flex-direction```)
    * main-start, main-end: Vị trí đặt item trong container, start là ở đầu, end là ở cuối.
    * main-size: width của flex-item. (hoặc height tuỳ theo hướng trục main axis)
    * cross axis: Trục dọc của trục chính, hướng của này phụ thuộc vào trục chính.
    * cross-start, cross-end: Các nội dung của item được trải dài từ cross-start tới cross-end.
    * cross size: height của flex-item. (hoặc width tuỳ theo hướng trục main axis)
* Các thuộc tính chính:
  * *Thuộc tính cha:*
    ![Container](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)
    * display: Định nghĩa flex cho một container và áp dụng flex cho các con trong nó:
    ```
    .container {
        display: flex; /* or inline-flex */
    }
    ```
    (CSS col không có tác dụng trong flex container)
    * flex-direction: xác định phương hướng của trục chính (main-axis) 
    ![flex-direction](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)
    ```
    .container {
        flex-direction: row | row-reverse | column | column-reverse;
    }
    ```
    * flex-wrap: Xử lí các item nếu như bị tràn ra ngoài container.
    ![flex-wrap](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)
    ```
    .container {
        flex-wrap: nowrap | wrap | wrap-reverse;
    }
    ```
    Trong đó:
        * nowrap: Các item đều sẽ nằm trên 1 hàng.
        * wrap: Nếu item bị tràn thì sẽ tự động xuống hàng, từ trên xuống dưới
        * wrap-reverse: như wrap nhưng ngược lại
    * flex-flow: Shorthand cho flex-direction và flex-wrap.
    ```
    .container {
        flex-flow: column wrap;
    }
    ```
    * justify-content: Giúp xác định vị trí và tự động căn lề cho các item trong container theo trục chính.
    ![justify-content](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

    ```
    .container {
        justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    }
    ```

    Trong đó:
        * flex-start (mặc định): các item sẽ được xếp sát nhau và sát bên tay trái.
        * flex-end: các item sẽ được xếp sát nhau và sát bên tay phải.
        * center: các item sẽ được xếp sát nhau và sát bên giữa.
        * space-between: các item sẽ được trải dài và căn đều, item đầu tiên sẽ ở bên start, item cuối cùng sẽ ở bên end.
        * space-around: các item sẽ được trải dài và căn đều, item đầu tiên và cuối cùng sẽ được căn 1 khoảng lề nhỏ ở 2 bên
        * space-evenly: các item sẽ được trải dài và căn đều giữa các item và 2 bên start end.
    * align-items: Giúp xác định vị trí đặt item theo trục ngang của container.
    ![align-items](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)
    ```
    .container {
        align-items: stretch | flex-start | flex-end | center | baseline;
    }
    ```

    Trong đó: 
        * stretch: Kéo giãn để fill container (vẫn ưu tiên min-width/max-width)
        * flex-start: Các item được đặt ở điểm start của trục dọc và đặt sát.
        * flex-end: Các item được đặt ở điểm end của trục dọc và đặt sát.
        * center: Các item được đặt ở điểm giữa của trục dọc
        * (?) baseline: 

    * align-content: Xác định vị trí đặt các lines của container nếu còn 1 khoảng trống xét theo trục dọc.
    ![align-content](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)
    ```
    .container {
        align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch;
    }
    ```
    (Định nghĩa như trên)

    * gap, row gap, column gap: Quản lí khoảng cách giữa các item trong container
    ![gap](https://css-tricks.com/wp-content/uploads/2021/09/gap-1.svg)
    
    ```
    .container {
        display: flex;
        ...
        gap: 10px;
        gap: 10px 20px; /* row-gap column gap */
        row-gap: 10px;
        column-gap: 20px;
    }
    ```
* *Thuộc tính con:*
![child-flex](https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg)
  * order: Xác định thứ tự các item được đặt trên container.
  ![order](https://css-tricks.com/wp-content/uploads/2018/10/order.svg)
    ```
    .item {
        order: 5; /* default is 0 */
    }
    ```
  * flex-grow, flex-shrink: Thay đổi kích cỡ của một item nhưng đảm bảo các item trong container được phân bố đồng đều. 
  ![flex-grow-shrink](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)
    ```
    .item {
        flex-grow: 4; /* default 0 */
    }
    ```
    ```
    .item {
        flex-shrink: 3; /* default 1 */
    }
    ```
  * (?) flex-basis
  * flex: shorthand cho flex-grow, flex-shrink và flex-basis
    ```
    .item {
        flex: 0 1 auto //default
    }
    ```
  * align-self: override thuộc tính align-items của thằng cha.
    ```
    .item {
            align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
    ```

## Bootstrap:
(in progress)

# Blockchain, Etherium và Smart Contact:
## Blockchain: 
**1. Khái niệm**
Là hệ thống cơ sở dữ liệu cho phép lưu trữ và truyền tải các khối thông tin. Chúng được liên kết nhau nhờ mã hoá.
Các khối thông tin hoạt động độc lập mà có thể mở rộng theo thời gian, được quản lí bởi những người tham gia hệ thống.

**2. Cách hoạt động**
Để một block – khối thông tin được thêm vào Blockchain, phải có 4 yếu tố:
* Phải có giao dịch
* Giao dịch đó phải được xác minh
* Giao dịch đó phải được lưu trữ trong block
* Block đó phải nhận được hash

## Etherium: 
**1. Khái niệm**
Ethereum là một "không gian mạng" cho các máy tính trên toàn thế giới, cùng tuân theo một loạt quy tắc gọi là giao thức Etherum. Bất kì ai cũng có thể tham gia sử dụng và đóng góp không giới hạn.

**2. Lợi ích**
- Ai cũng có thể tham gia
- Giao dịch toàn cầu nhanh chóng và dễ dàng hơn, kể cả khi đất nước người dùng đang trong thời kì khủng hoảng
- Khai thác nguồn content mới dành cho các creator
- "Play to earn"

## Smart contact:


