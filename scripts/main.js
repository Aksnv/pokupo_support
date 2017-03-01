/* Добавление/удаление звездочек у полей ввода + подсказки над полями ввода */

$(".application-form input").keydown(function() {
  $(this).parent().addClass("application-form__label--focus");
  $(this).siblings(".application-form__prompt").addClass("application-form__prompt--open");
});

$(".application-form input").blur(function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass("application-form__label--focus");
    $(this).siblings(".application-form__prompt").removeClass("application-form__prompt--open");
  }
});

$(".application-form textarea").keydown(function() {
  $(this).parent().addClass("application-form__label--focus");
  $(this).siblings(".application-form__prompt").addClass("application-form__prompt--open");
});

$(".application-form textarea").blur(function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass("application-form__label--focus");
    $(this).siblings(".application-form__prompt").removeClass("application-form__prompt--open");
  }
});

/* Выпадающие меню выбора в форме */

$(".application-form__category").click(function() {
  $(".application-form__category-list").toggleClass("application-form__category-list--open");
  $(this).toggleClass("application-form__category--open");
});

$(".application-form__priority").click(function() {
  $(".application-form__priority-list").toggleClass("application-form__priority-list--open");
  $(this).toggleClass("application-form__priority--open");
});




