# Topic 7: JSX, Component, Styling và Props
## 1. JSX:
**Khái niệm:**
Trước tiên, phải tìm hiểu qua DOM và Virtual DOM:
* DOM (Document Object Model) là một chuẩn dùng để truy xuất và thao tác trên các tài liệu dạng HTML hay XML
* Virtual DOM là phiên bản ảo của DOM. Khi re-render, React sẽ tạo bản Virtual DOM mới và so sánh với V.DOM cũ và chỉ cập nhật các phần tử thực sự thay đổi chứ ko phải là nguyên file.
* Vậy, JSX là dạng syntax của XML để tạo các V.DOM biên dịch xuống pure JS.

**Expression:** { [your variables here] }, " "
**Function**
**Attributes:** Support các tag và thuộc tính của HTML

Đều support được ở trong dạng thẻ trong JSX

## 2. Component:
**Khái niệm:** là các thành phần giúp chia UI thành các phần độc lập có thể tái sử dụng được, bao gồm:
**Properties:** Cho phép component nhận được input.
**Events:** Cho phép component quản lí các DOM event và tương tác người dùng cuối
**State:** Cho phép component luôn trong một trạng thái nhất định. Khi UI update thì các stateful component cũng update trạng thái theo.

## 3. Styling:
**Các dạng styling của React:**
1. CSS StyleSheet
2. Inline Styling
3. CSS Module - Khi render sẽ tạo ra một dạng style mới hoàn toàn mà không hề động chạm tới thằng css khác
4. SASS StyleSheet
5. Post processing Stylesheet

## 4. Properties (Prop):
Sử dụng để gửi dữ liệu đến component, là bất biến, ko thay đổi được

