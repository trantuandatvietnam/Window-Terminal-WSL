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

* Trong Ubuntu nó có thư mục /etc/apt/sources.list (Nó chứa thông tin về  gói)
* Khi chạy câu lệnh update thì nó sẽ tìm các package từ nhiều nguồn khac nhau
* Cách xem etc/apt/sources.list: cat etc/apt/sources.list (Hiển thị nội dung file ra terminal)

* Câu lệnh tải xuống và cài đặt một package: sudo apt install [ten_package]