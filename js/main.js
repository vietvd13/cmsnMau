function handleSendGift(inputValue) {
    let http = new XMLHttpRequest();
    let url = "https://mau-api.herokuapp.com/gift/create";
    http.open("POST", url, true);
    http.setRequestHeader('Content-type','application/json; charset=utf-8');

    let GIFT = {
        gift: inputValue
    };

    http.send(JSON.stringify(GIFT));
}

function handleHPBD() {
  setTimeout(function() {
      swal({
              title: "Bạn nhận được một món quà!",
              text: "Duck vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn",
              imageUrl: "https://media.giphy.com/media/1wmOyZYoGzz003R03Y/giphy.gif",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Nhận quà ngay",
              cancelButtonText: "Không cần, cám ơn",
              closeOnConfirm: false,
              closeOnCancel: false
          },
          function(isConfirm) {
              if (isConfirm) {
                  swal({
                          title: "Bạn có phải là Mẩu?",
                          text: "Nhập mã xác nhận",
                          type: "input",
                          showCancelButton: true,
                          closeOnConfirm: false,
                          showLoaderOnConfirm: true,
                          animation: "slide-from-top",
                          inputPlaceholder: "Mã xác nhận là gì?"
                      },
                      function(inputValue) {
                          if (inputValue === false) return false;
                          if (inputValue !== "2508") {
                              swal.showInputError("Nhập sai rồi kìa :v");
                              return false
                          }

                          setTimeout(function() {
                              swal({
                                      title: "Nhập tên món quà nào đó",
                                      text: "Mẩu muốn nhận quà gì nào?",
                                      type: "input",
                                      showCancelButton: true,
                                      closeOnConfirm: false,
                                      animation: "slide-from-top",
                                      inputPlaceholder: "Quà gì cũng được nè!"
                                  },
                                  async function(inputValue) {
                                      if (inputValue === false) return false;
                                      if (inputValue === "") {
                                          swal.showInputError("Ơ thế không muốn nhận quà à?");
                                          return false
                                      }

                                      await handleSendGift(inputValue);

                                      swal("", "Món quà : " + inputValue + " đã được gửi tới Duck!", "success");

                                  });
                          }, 3000);
                      });

              } else {
                swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ Duck,    Ấn F5 nếu muốn nhận lại quà!", "error");
              }
          });
  }, 8000);
}

handleHPBD();