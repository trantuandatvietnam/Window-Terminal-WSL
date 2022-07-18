# Khóa học sử dụng Windows Terminal & WSL (Window Subsystem for Linux)

## Windows Terminal

- Là một terminal hiện đại, mạnh mẽ trong việc cá nhân hóa, giúp tùy chỉnh theo sở thích của </br>
  người sử dụng => Nâng cao trải nghiệm cá nhân, tăng cảm hứng khi làm việc với các dòng lệnh

## Window Subsystem for Linux

- Cho phép cài đặt và chạy hệ điều hành Ubunto trên chính máy tính window của mình

=> Không cần phải cài song song hai hệ điều hành và cũng không phải cài phần mềm bên thứ 3 để tạo ra máy ảo rồi cài Unbuto lên đó nữa

- Thực chất việc sử dụng window Subsystem for Linux nó cũng sử dụng công nghệ ảo hóa để chạy Unubto, tuy nhiên đây là phần mềm được microsoft hỗ trợ => Việc cài đặt dễ dàng, hoạt động nhanh

## Outline bài giảng

- Windows Terminal

  - Cài đặt Windows Terminal
  - Trải nghiệm thử
  - Cài đặt Git/Git Bash
  - Thêm GitBash vào Windows Terminal

- Window Subsystem for Linux

  - Giới thiệu
  - Cài đặt WSL 1

- Các lệnh Linux cơ bản
  - ls
  - cd
  - clear
  - touch
  - vi
  - mkdir
  - cat
  - tail
  - grep
  - echo
  - cp
  - mv
  - rmdir
  - rm
  - sudo
  - chmod
  - chown
  - wget
  - apt-get
  - history
  - kill
  - ping
  - uname
  - passwd
  - top
  - df
  - free

> Mẹo

- Nhấn `tab` để auto complete
- Nhấn `ctr + a`/ `ctr + e` để di chuyển về đầu, cuổi command
- Chạy đồng thời nhiều commands: `command-1; command-2; command-3`, `command-1 && command-2 && command-3`

## Chạy dự án React

- Cài đặt Node
- Tạo dự án với create-react-app
- Chạy dự án

## Chạy dự án Express

- Tạo dự án Express
- Chạy dự án

## Chạy dự án Laravel

- Cài đặt PHP 7.4 & composer
- Tạo dự án Laravel với composer
- Cài đặt MariaDB
- Kết nối với Database

## Cách gỡ bỏ

## Thực hành thôi

### **Bài 1: Cài đặt Windows Terminal**

- Bản chất việc sử dụng terminal là để tương tác với hệ điều hành => Dùng terminal trong VS hay ngoài VS thì </br>
  cũng như nhau (CMD, Git Bash(Git), Window PowerShell cả 3 có điểm yếu là không hỗ trợ chia tab, tùy biến)
- Bước 1: Vào Microsoft Store tìm kiếm Windows Terminal và cài đặt bình thường
- Bước 2: Vào setting thêm file git bash(Lên gg search)
- Bước 3: Tìm hiểu các lệnh nhanh trong Terminal bằng cách vào trong settings và vào mục action

### **Bài 2: Cài đặt Unbuto với WSL 1**

- Đây là công cụ của microsoft, giúp bạn có thể cài đặt và chạy được hệ điều hành Unbuto trên chính hệ điều hành Window
- Lên mạng search Window Subsystem for Linux

- uname -a (Hiển thị số phiên bản của hệ điều hành)

### **Bài 3: Update, Upgrade Packages** 

- Package hiểu đơn giản là các phần mềm được đóng gói lại
- Update/ Uprade: Nâng câp ứng dụng
- Câu lệnh Update: sudo apt update (Nó vào internet và tìm lấy thông tin phiên bản, package mới nhất về chứ chưa thực hiện nâng cấp lên)
- Câu lệnh Upgrade: sudo apt upgrade (Sau khi đã update thì sử dụng câu lệnh này để quá trình cài đặt được diên ra dựa trên phiên bản mà câu lệnh update tìm thấy)
- Chạy 2 câu lệnh này khi ta mới nhận được một máy chủ ubuntu hoặc khi mới cài đặt xong WSL

* Trong Ubuntu nó có thư mục `/etc/apt/sources.list` (Nó chứa thông tin về  gói)
* Khi chạy câu lệnh update thì nó sẽ tìm các package từ nhiều nguồn khac nhau
* Cách xem `etc/apt/sources.list:` `cat etc/apt/sources.list `(Hiển thị nội dung file ra terminal)

* Câu lệnh tải xuống và cài đặt một package: sudo apt install [ten_package]

### **Bài 4: Các lệnh cơ bản trong Linux**
- Cần hiểu mnt là thư mục ổ  C, D (Chứa cả thư mục của window) (Nếu sử  dụng WSL)
- home: là thư mục chứa account
- Muốn đi vào thư mục chứa dữ liệu trong máy tính của mình thì chỉ cần gõ `cd` hoặc quay về  thư mục root bằng lệnh `cd /` rồi đi tới `cd home` rồi từ home đi vào tài khoản của mình.
- Trong trường hợp trong folder chỉ có một folder duy nhất thì khi bấm `tab tab` nó sẽ tự đi tới thư mục đó
1. ls
- Giúp quan sát bên trong một thư mục xem nó có gì (Quan sát bên trong thư mục mà terminal đang trỏ tới)
- ls: Hiển thị tất cả các file/folder (không ẩn)
- Muốn hiển thị tất cả các file/folder (không ẩn) một các detail hơn thì gõ lệnh: `ls -l` (Nó sẽ hiển thị ra thời gian, người tạo, ...)
- Lưu ý: Lệnh `ls` và `ls -l` chỉ giúp ta nhìn thấy các file KHÔNG ở trạng thái ẩn (Những file/thư mục ở trạng thái ẩn trong Ubuntu được bắt đầu bằng dấu .)
- Muốn nhìn được tất các file/folder (Bao gồm file/folder ẩn) thì sử  dụng `ls -a` (a ở đây hiểu là all)
- Nhìn chi tiết tất cả các file/folder (bao gồm cả ẩn) => `ls -la` hoặc `ls -al` cũng như nhau
- Sử  dụng `ls -R` để  nhìn thấy thấy cả mọi file/folder (bao gồm cả cấp con của các cấp con, ...)
2. cd (Viết tắt của change directory)
- Giúp di chuyển qua lại giữa các thư mục khác nhau
- Gõ câu lệnh cd sau đó bấm tab 2 lần thì nó sẽ hiển thị tất cả thư mục bên trong (Cả file/thư mục ẩn)
- Nếu cd tab mà không ra thì chứng tỏ có nhiều file được bắt đầu bằng chữ cái đã ghi (VD `cd ng + tab` => Có nhiều file </br>
bắt đầu bằng `ng`)  

=> Sử  dụng thêm tab tab để  xem có những file nào bắt đầu bằng `ng`
- Khi sử  dụng cd phải đi qua từng cấp, không được nhảy cóc đến cấp con của thư mục đang trỏ luôn
- Sử  dụng `cd ..` là quay lại một cấp, `cd../..` là quay lại 2 cấp, `cđ ../../../` là quay lại 3 cấp, tương tự như vậy cho nhiều cấp
- Muốn đi một phát tới thư mục cọn của thư mục thì ta đi từng mục, mỗi mục ngăn cách bởi `/` VD: `WorkSpace/git/myProject`
- Muốn quay lại directory gần nhất(Trước khi thực hiện lệnh cd) thì gõ `cd -`. Ví dụ thư mục đang là `/WorkSpace` ta sử  dụng `cd git/myProject` </br>
thì lúc đó đường dẫn hiện tại sẽ là `/WorkSpace/git/myProject`. Lúc này gõ `cd -` thì nó sẽ quay lại đường dẫn `/WorkSpace`
- Muốn quay về  thư mục gốc (Root) thì sử  dụng `cd /`

3. clear
- Dọn dẹp nội dung cũ đang được hiển thị tại terminal

Lưu ý: 
  - Khi làm việc với terminal là phải xác định dùng câu lệnh để  đạt được điều mình mong muốn
  - Cần nắm và hiển rõ những thông tin trên terminal

4. Lệnh `mkdir` (Make directory)
- Cú pháp `mkdir ten_folder`
- Khi có nhu cầu tạo ra các thư mục
- Đang đứng ở thư mục nào mà sử  dụng lệnh này thì nó sẽ tạo folder bên trong thư mục đó (Lưu ý: mỗi thư mục cách nhau bằng ` ` nếu muốn tạo nhiều thư mục một lúc)
- Xóa thư mục `rmdir ten_folder_bi_xoa` (remove directory): Lưu ý là phải đứng bên ngoài file cần xóa(Hiểu là tại nơi tại nó) </br>
Câu lệnh trên chỉ xóa được một thư mục trống
- Tạo thư mục có nhiều cấp theo cú pháp `mkdỉr parent/children1/children2`, tuy nhiên để  tạo được cấp con thì tất cả các cấp trước nó phải được tồn tại
- Muốn xóa một phát cả folder (Bao gồm các cấp con của nó) thì dùng lệnh `rm -r ten_cap_cha`
- Muốn tạo một phát một folder nhiều cấp thì ta sử  dụng `mkdỉr parent/children1/children2/... -p` (Tham số  p này có thể  đặt ở dầu hoặc ở cuối cũng được nha)

5. Lệnh `touch ten_file`
- Câu lệnh này đơn thuần chỉ tạo ra một file(Không hỗ  trợ thêm nội dung file)
- Để  xóa một file: `rm ten_file`
- Để  tạo một file trong folder nhiều cấp VD: parent/children1/children2/children3/.../index.html
  + Bước 1: Tạo folder nhiều cấp (bằng cách sử dụng -p)
  + Bước 2: Dùng touch để  tạo file

6. Lệnh `vi` (vim)
- Nó là một editer được cài mặc định trên hệ điều hành Unix
- Vào terminal gõ `vi` => Nó sẽ truy cập vào vim của máy (Làm theo hướng dẫn để  thoát vim (:q enter))
- Sử  dụng vim để  tạo file: `vi ten_file` => Nó sẽ bật chế  độ editor
  + Khi mới đầu vào thì vim sẽ mặc định ở chế  độ normal mode
  + Để  viết ở chế  độ Intrust => Cần gõ `i`
  + Để  thoát khỏi chế  độ Intrush => ESC
  + Để  chỉnh sửa lại file ta sử  dụng: Di chuyển con trỏ chuột đến nơi cần chỉnh sửa rôi nhấn `i` để  vào chế  độ chỉnh sửa 
  + Thoát khỏi vim mà không lưu file: `:q!` 
  + Thoát và lưu file `:w`
  + Lưu ý: Nếu muốn thoát thì ta cần trở lại chế  độ normal mode bằng cách nhấn phím ESC
  + Để  đồng thời vừa lưu vừa thoát, ta sử  dụng `:wq` hoặc `:x`
  + Tự tìm hiểu trên mạng
  + Lưu ý: Nếu không mở được chế  độ Insert của vim thì cần cài đặt lại vim nhé, lên google mà tìm hiểu