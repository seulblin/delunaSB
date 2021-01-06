//처음에는 #birth 와 #passwords를 checkInput에서 변경 할끄
$("#birth").on('input',checkInput); 
$("#passwords").on('input',checkInput);

function checkInput() {
  var birth = $("#birth").val();//input 값 가져오기
  var password = $("#passwords").val();

  if(birth === '' || password === ''){//만약 birth와 passwords가 작성이 되면
    $("#submit-btn").css('border','1px solid #fff')//이거하고
  }else{ //아님 밑에꺼.
    $("#submit-btn").css('border','1px solid #faaa19')
  }
}