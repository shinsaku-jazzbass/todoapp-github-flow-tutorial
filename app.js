$("#addTodo").click(function (){
    //alert("ok");
    const inputTodo = $("ainput").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
})