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
              title: "Điều ước",
              text: "Trong sinh nhật lần này em muốn ước điều gì nào?",
              imageUrl: "https://media.giphy.com/media/9rO5Aksmn0dHQKXJAu/giphy.gif?cid=ecf05e47c01212bm5tqyki1zsqz4yudjmfki8bqrpqq9yw5i&rid=giphy.gif&ct=g",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Ước ngay",
              cancelButtonText: "Để sau",
              closeOnConfirm: false,
              closeOnCancel: false
          },
          function(isConfirm) {
              if (isConfirm) {
                  swal({
                          title: "Xác nhận",
                          text: "Nhập mã xác nhận",
                          imageUrl: "https://media.giphy.com/media/JYZ397GsFrFtu/giphy.gif",
                          type: "input",
                          confirmButtonColor: "#DD6B55",
                          showCancelButton: false,
                          closeOnConfirm: false,
                          showLoaderOnConfirm: true,
                          animation: "slide-from-top",
                          inputPlaceholder: "Mã xác nhận là gì?"
                      },
                      function(inputValue) {
                          if (inputValue === false) return false;
                          if (inputValue !== "2508") {
                              swal.showInputError("Nhập sai rồi kìa");
                              return false
                          }

                          setTimeout(function() {
                              swal({
                                      title: "Điều ước",
                                      text: "Em muốn ước điều gì nào?",
                                      type: "input",
                                      showCancelButton: false,
                                      closeOnConfirm: false,
                                      animation: "slide-from-top",
                                      inputPlaceholder: "Ghi càng dài càng tốt nhé..."
                                  },
                                  async function(inputValue) {
                                      if (inputValue === false) return false;
                                      if (inputValue === "") {
                                          swal.showInputError("Sao điều ước lại trống thế kia 😕");
                                          return false
                                      }

                                      await handleSendGift(inputValue);

                                      swal({
                                        title: "Điều ước",
                                        text: "Điều ước của em đã được gửi tới Duck rồi nhé!",
                                        imageUrl: "https://media.giphy.com/media/vIJaz7nMJhTUc/giphy.gif",
                                        showCancelButton: false,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Được luôn",
                                        cancelButtonText: "Để sau",
                                        closeOnConfirm: false,
                                        closeOnCancel: false
                                      });
                                  });
                          }, 3000);
                      });

              } else {
                swal("Ơ em không ước à 😳", "Nếu muốn ước lại thì truy cập lại vào trang này nhé!", "error");
              }
          });
  }, 8000);
}

handleHPBD();