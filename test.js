$.ajax({
    type: "GET",
    url: "https://script.google.com/macros/s/AKfycbznmpBxI4uixhXXu0HXg7bzZhROPG8s8Fhv8wk0IJKmJnyjJ1mvvrLdWQUvIW5fbZxJ6w/exec",
    data: {
        "bool": "Output"
    },
    success: function(yu, inx1, inx2){
        alert(yu + inx1 + inx2)
    },
    error: function(response){
         alert('저장에 실패하였습니다.');
    }
  });