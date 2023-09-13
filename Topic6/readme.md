# Topic 6: Bootstrap & Responsive Design
## Responsive:

**Các câu hỏi:**
- Tại sao lại không để web phụ thuộc vào 1 fixed width nhất định
- Tại sao trong ví dụ gridViewExample.html, phần styling của gridcontent, lại có tận 2 background-color, và dụng ý của nó,

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
  ![Ảnh](https://www.w3schools.com/html/example_withoutviewport.htm)
  * Bức ảnh có tag viewport: 
  ![Ảnh](https://www.w3schools.com/html/example_withviewport.htm)
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
    * Các row (column) nếu được phân ra thì tổng của nó phải luôn bằng 12 (100%), nếu không sẽ xảy ra thừa thãi
    * 