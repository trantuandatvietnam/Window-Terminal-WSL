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
1. Lệnh `ls`
- Giúp quan sát bên trong một thư mục xem nó có gì (Quan sát bên trong thư mục mà terminal đang trỏ tới)
- ls: Hiển thị tất cả các file/folder (không ẩn)
- Muốn hiển thị tất cả các file/folder (không ẩn) một các detail hơn thì gõ lệnh: `ls -l` (Nó sẽ hiển thị ra thời gian, người tạo, ...)
- Lưu ý: Lệnh `ls` và `ls -l` chỉ giúp ta nhìn thấy các file KHÔNG ở trạng thái ẩn (Những file/thư mục ở trạng thái ẩn trong Ubuntu được bắt đầu bằng dấu .)
- Muốn nhìn được tất các file/folder (Bao gồm file/folder ẩn) thì sử  dụng `ls -a` (a ở đây hiểu là all)
- Nhìn chi tiết tất cả các file/folder (bao gồm cả ẩn) => `ls -la` hoặc `ls -al` cũng như nhau
- Sử  dụng `ls -R` để  nhìn thấy thấy cả mọi file/folder (bao gồm cả cấp con của các cấp con, ...)
2. Lệnh `cd `(Viết tắt của change directory)
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

3. Lệnh `clear`
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

7. Lệnh `cat` (concatenate)
- Xem nội dung của file (In ra theo tiêu chuẩn stout - standoutput)
- Ghép nội dung của nhiều file vào một file duy nhất: `cat file1 file2 ...` (Câu lệnh này chỉ giúp ghép trên stout)
- Để  ghép và ghi nhiều file vào một file ta làm như sau: `cat file1 file2 ... > ghep-file.html`
  + Nếu viết như trên thì mặc định nó sẽ tạo một file có tên là `ghep-file.html` trong thư mục mà ta đang trỏ vào

8. Lệnh echo
- Lệnh này nó in ra stout luôn, nếu chữ có nhiều từ thì cho nó vào dâu `""`
- Lưu ý: Cái gì mà có đầu ra là stout thì đều có thể  ghi một file có nội dung một cách nhanh chóng `echo "Xin chào anh em F8" > test-file.html`
- Trường hợp mình viết 2 hoặc nhiều câu lệnh có đầu ra cùng một file thì nội dung sẽ bị ghi đè
- Nếu không muốn ghi đè thì thay thế  `>` thành `>>`, lúc này sau mỗi câu lệnh có nội dung giống nhau hoặc khác nhau(Có cùng file đầu ra thì nó sẽ tạo ra một dòng mới tại file đó)

8. `tail duong_dan_file` Xem dòng nội dung mới nhất
- Nó sẽ in ra theo stout mặc định 10 dòng gần nhất
- Có thể  kiểm soát số  dòng được in ra như sau: `tail -n so_dong duong_dan_file`
  + VD: `tail -n 2 test-file.html`
- Xem thêm tham số  được hỗ  trợ trong tail bằng cách: `tail --help`
- `tail -f duong_dan`: Dùng lệnh này để  theo dõi file, mỗi khi nó có sự thay đổi thì sẽ in ra sự thay đổi đó
  + Cách thoát: `Ctr + - C`
- Được dùng trong trường hợp nào mà bạn muốn follow một file(Giả sử  follow file log lỗi) => Dùng `Ctr C` để  thoát theo dõi
- Dùng `Ctr Shift W` để  thoát cái terminal nhanh

9. `grep`
- Dùng để  lọc, tìm kiếm một từ xuất hiện trong stout 
- Cú pháp: `cat concat.html | grep tuandat` => Nó sẽ vào file concat.html và tìm chữ nào có tên là `tuandat` </br>
Nếu muốn tìm nhiều từ thì thêm nôi dung trong dấu ngoặc kép
- Tìm kiếm từ trong nhiều file bằng cú pháp: `cat test.html test-file.html | grep "Đạt"`

10. Lệnh `cp`
- Sử  dụng khi coppy file hoăc thư mục
- Cú pháp: `cp duong_dan_file_duoc_coppy duong_dan_file_coppy`
- Vd: `cp index.html index-coppy.html`
- Vd: `cp index.html my-folder/` => Lúc này tên file coppy sẽ được giữ nguyên và nằm trong `my-folder`
- Nêu muốn coppy sang một folder khác và đổi tên nó thì làm như sau:  Vd: `cp index.html my-folder/index-coppt.html`
- Hướng dẫn coppy folder: `cp -r duong_dan_folder_name duong_dan_folder_name2`
- VD: `cp index.html /home/` => Lỗi ủy quyền => Cần thực thi dưới quyền root hoặc được ủy quyền bằng cách sử  </br>
dụng sudo `sudo cp index.html /home/`

11. Lệnh `mv` (move)
- Sử  dụng để  di chuyển, đưa file hoặc thư mục này sang file hoặc thư mục khác hoặc dùng để  đổi tên
- VD: `mv file.html new-file.html` => Bản chất là nó đổi vị trí thư mục chứa file, tuy nhiên do 2 file được trỏ cùng một đường dẫn => Nó thực hiện đổi tên
- Tương tự, sử  dụng sudo nếu muốn di chuyển vào thư mục home

12. Lệnh `rm` (remove)
- Dùng để  xóa file
- `rm index.html` Xóa file index.html tại thư mục đang đứng
- Xóa đồng thời nhiều file: `rm index1.html index2.html ...`
- Tuy nhiên câu lệnh này lại không thể  xóa folder
- Sử  dụng `rmdỉr folder_dictionary` để  xóa folder, tuy nhiên nó chỉ xóa được folder trống thôi, folder chứa file thì không 
- Sử  dụng `rm -r folder_dictionary` để  xóa folder và cả nội dung bên trong nó
- Xóa một file trong home thì cần thêm sudo để  ủy quyền cho nó: VD: `sudo rm home/index.html`

13. Lệnh `sudo` (Supper User Do)
- Làm việc gì đó dưới vai trò của một Supper User, đây là tài khoản người dùng có thể  làm những việc mà tài khoản người dùng bình thường không làm được </br>
Ví dụ như phân quyền hạn hoặc can thiệp sâu vào hệ thống tệp nằm trong hệ điều hành 
- `sudo touch /home/index.js`: Tạo file index.html trong sudo

14. Lệnh `chmode` (Change mode" Thay đổi chế  độ)
- Dùng để  phân quyền hạn cho thư mục và file
- Trong Ubuntu có 3 vai trò
  + Chủ sở hữu (Owner): Đây là người dùng cụ thể
  + Nhóm sở hữu: (Group): Một nhóm lại có nhiều nguòi
  + Những người còn lại(Everyone)
- Xem thông tin thư mục gốc: `ls -l /`
- Ví dụ: 1 root(1) root(2)
  + Vị trí thứ (1) là Owner 
  + Vị trí thứ (2) là thư nhóm sở hữu
  + Nhìn vào cột thứ nhất
    + Nếu bắt đầu bằng chữ D thì đó là một folder
    + Bắt đầu bằng dấu `-r` thì đó là một file
    + Bắt đâu bằng chữ `l` thì đó là một shortcut
  
- Có 3 quyền khi truy cập:
  + Read
  + Write
  + execute
- Ta có file ghi như sau: l rwx rwx rwx 
  + 3 kí tự đầu tên thể  hiện quyền hạn cho nhóm Owner
  + 3 kí tự tiếp theo thể  hiện quyền hạn cho nhóm Group
  + 3 kí tự tiếp theo thể  hiện quyền hạn cho nhóm Other
  + Chữ `r` thể  hiện quyền đọc, chữ `w` thể  hiện quyền ghi và chữ `x` thể  hiện quyền execute
  + Dấu `-` nghĩa là không có gì

- Cú pháp của lệnh `chmod`: `chmod options permissions file name`
  - Options: -R (Recursive(Đệ quy)) => Phân quyền cho tất cả thư mục và file
  - Permissions: 
    + Cách 1: Thể  hiện bằng hệ số  bát phân (Từ 0 - 7)
      + 4 là quyền read
      + 2 là quyền write
      + 1 là execute
      + 0 là không có quyền gì cả
      + Full quyền là số  7 vì 4 + 3 + 2 = 7, đọc và ghi sẽ là 4 + 2 = 6 (Quy tắc là cộng các quyền vào thôi)
      + Set full quyền cho tất cả: `sudo chmod 777 index.html` => Có nghĩa là set full quyền cho 3 thằng user(owner) group và other
      + Set cho user(owner) là full quyền, user(owner) đọc và execute và ông other là full quyền `udo chmod 757 index.html`
      + Khi nào sử  dụng sudo cho hợp lý: Khi biết thực sự dòng lệnh dùng tài khoản root (Ví dụ như chmod buộc phải dùng root => Cần sudo), Thông </br>
  thường khi tải file trên mạng về  mà không nó dùng dòng lệnh có sudo thì phải xem dòng lệnh đó có thực sự cần sử  dụng sudo không nhá
      + Giả sử  ta gõ lệnh sau: `vi run.sh` sau đó bật chế  độ insert và ghi vào file trong dó sau đó thoát ra. Để  chạy file.sh ta cần làm như sau: </br>
  chạy lệnh `./run.sh` sẽ gặp một lỗi là quyền bị từ chối do mình đang là tài khoản thuộc other, lúc này ta sẽ check quyền bằng cách sử  dụng lệnh `ls -l` để  xem quyền và bổ  sung quyền thực thi cho nó
    + Cách 2: Dùng kí tự(r - read, w - write, x - execute)
      + VD: `chmod u=rwx, g=rx, o = r, myFile` (Chữ u - Owner, g - Group, o - Other, a - All, myFile là file bị phân quyền)
        + Dấu `=` thể  hiện gán trực tiếp cho quyền đó
        + Dấu `+` Giữ nguyên các quyền có sẵn và thêm vào đó một số  quyền
        + Dấu `-` Giữ nguyên các quyền có sẵn và loại bỏ một số  quyển 
      + Tài khoản của mình sẽ thuộc nhóm other
      + Giả sử  muốn xóa bỏ chế  độ đọc của `-rw-rw-r--` ta thực hiện : `sudo chmod o-r index.js` => Thực hiện xong ta nhấn `ls -l` để  kiểm tra quyền đã bị gỡ bỏ 
      + Sử  dụng vim để  sửa file nhé 
      + Để  chỉnh sửa quyền của nhiều đối tượng ta làm như sau: Ví dụ Để  Owner có full quyền, group chỉ có read và execute, và other chỉ có quyền đọc </br>
ta làm như sau: `sudo chmod o=rwx,g=rx,o=r`, để  set cả 3 ông có quyền giống nhau thì ta chỉ cần có `a=rwx` chẳng hạn


```js
let myArray = [1, 2, 3, 4, 5];
myArray.forEach((number, index) => {
  myArray[index] = number*number;
})
console.log(myArray);
```

15. Lệnh `chown` (Change owner)
- VD: `sudo chown root run.sh`: Lệnh này có nghĩa là chuyển quyền Owner cho root với file là run.sh
- VD: `sudo chown root:root run.sh`: Lệnh này có nghĩa là chuyển quyền Owner cho root và cho cả Group với file là run.sh
- VD: `sudo chown dat:dat run.sh`: Lệnh này có nghĩa là lấy lại quyền Owner cho root và cho cả Group với file là run.sh
- Kiểm tra xem account của mình đang nằm trong group nào thì ta dùng: `groups`

16. Lệnh `man`
- Dùng để  tra cứu các lệnh trong Linux hoặc Ubuntu
- Cú pháp: `man tên_lệnh_cần_tra`: VD: `man tail`

17. Lệnh `wget`
- Dùng để  tải file khi có đường link trực tiếp tải xuống (Trình tải xuống qua mạng), hỗ  trợ giao thức HTTP, HTTPS, FTP (Thường dùng qua HTTP)
- VD: Lên mạng coppy một địa chỉ hình ảnh sau đó sử  dụng `wget địa_chỉ_hình_ảnh`

18. Lệnh `apt`
- Là một cái trình để  quản lí các thư viện, gói trên máy Ubuntu của mình
- Khi cài gói mới hoặc nâng cấp các gói hiện có thì chúng ta sử  dụng `apt`
- Cách nâng cấp gói hiện có đã được học từ những bài trước, nên bài này chúng ta học cách cài một gói mới
- VD: Cài nodeJs: `sudo apt install ten_package_cai_dat` ở đây là nodeJs => `sudo apt install nodejs`
- Muốn cái nhiều thư viện một lúc thì mỗi thư viện được cách nhau bởi dấu khoảng trắng
- Ta biết rằng, khi cài một package thì nó sẽ hỏi xem mình có đồng ý cài không => Nếu muốn bỏ qua bước này (Nó auto đồng ý) thì thêm `-y` đằng sau cú pháp cài </br>
  Ví dụ: `sudo apt install nodejs -y`
- Test node: `node -v` và tạo 1 file js: `echo console.log(Math.random) index.js` rồi thử  bằng lệnh `node index.js` nhé

19. Lệnh `kill`
- Dùng để  kết thúc một tiến trình
- Muốn xem các tiến trình đang chạy ta sử  dụng: `ps aux` 
- Có 64 tín hiệu nhưng thường chỉ sử  dụng 2 tín hiệu sau: 
  + SIGTERM(15): Gửi tín hiệu cho cái tiến trình đang bị đơ, nhưng nó sẽ chờ để  tiến trình đó kịp lưu thông tin tránh mất dữ liệu
  + SIGKILL(9): Bắt tiến trình đó phải dừng ngay lập tức và có thể  không lưu được dữ liệu làm mất thông tin
  + Để  kill một tiến trình ta sử  dụng `kill -tín_hiệu PID` để  xem PID ta gõ `ps aux` VD: `kill -9 1631` (Tắt ngay lập tức tiến trình 1631)

20. Lệnh `ping`
- Thể  hiện tốc độ kết nối đến máy chủ
- VD: `ping google.com`

21. Lệnh `uname` (Unix name): Giúp xem được thông tin kanel của hệ điều hành 
- `uname -a` để  show tất cả thông tin của nó ra

22. Lệnh `passwd` để  đổi mật khẩu cho tài khoản hiện tại

23. Lệnh `top`
- Giống như task manager trong window, giúp nhìn chi tiêt về  tiến trình, về  cpu và ram
- Cú pháp: `top`
- Sử  dụng `h top` thì giao diện nhìn sẽ đẹp hơn và nêu chi tiết về  tiến trình hơn

24. Lênh `df`
- Cú pháp: `man df`: Để  kiểm tra những lệnh được support 
- Cú pháp: `df -h` Giúp kiểm tra thông tin dung lượng ổ cứng chi tiết hơn là khi chỉ sử  dụng df

25. Lệnh `free`: Giúp kiểm tra dung lượng ram và swap
- Sử  dụng `free -h` để  kiểm tra chi tiết hơn

### Các mẹo khi gõ lệnh
- Nhấn `tab` để  auto complete
- Nhấn `ctr a/ ctr e` để  di chuyển đầu cuối
- Gõ nhiều commands
  + Cách 1: `command1;command2;command3` (Đối với cách này thì kể  cả khi thằng đăng trước sai thì đăng sau vẫn được chạy)
  + Cách 2: `command1 && command2 && command3` (Đối với câu lệnh này thì thằng sau sẽ chạy khi và chỉ khi thằng trước nó chạy)

### Cài đặt NodeJs trên Ubuntu
- Lần trước đã cài đặt nodeJs rồi, tuy nhiên nó là bản cũ => Cần tải bản mới hơn
- Xóa bản cũ: `sudo apt remove nodejs`
- Sau khi xóa bản cũ cần chạy thêm lệnh `sudo apt autoremove`: Vì khi tải một package nào đó thì nó sẽ tự động cài thêm nhiều package khác liên quan nên muốn xóa hết nó thì cần chạy thêm lệnh trên
- Lên google để  tìm hiểu cách cài phiên bản node mới nhất

### Chạy dự án ReactJs trên Ubuntu
- Tự tìm hiểu

### Chạy dự án NodeJS trên Ubuntu
- Tự tìm hiểu