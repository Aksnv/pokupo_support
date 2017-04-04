/* Добавление/удаление звездочек у полей ввода + подсказки над полями ввода */

$(document).ready(function() {
  if ($("#application-form__name").val() != "") {
    $("#application-form__name").parent().addClass("application-form__label--cleared");
    $("#application-form__name").prev().addClass("application-form__prompt--open");
  }

  if ($("#application-form__email").val() != "") {
    $("#application-form__email").parent().addClass("application-form__label--cleared");
    $("#application-form__email").prev().addClass("application-form__prompt--open");
  }

  if ($("#application-form__theme").val() != "") {
    $("#application-form__theme").parent().addClass("application-form__label--cleared");
    $("#application-form__theme").prev().addClass("application-form__prompt--open");
  }

  if ($("#application-form__message").val() != "") {
    $("#application-form__message").parent().addClass("application-form__label--cleared");
    $("#application-form__message").prev().addClass("application-form__prompt--open");
  }

  if ($("#application-form__login").val() != "") {
    $("#application-form__login").parent().addClass("application-form__label--cleared");
    $("#application-form__login").prev().addClass("application-form__prompt--open");
  }

  if ($("#application-form__capcha").val() != "") {
    $("#application-form__capcha").parent().addClass("application-form__label--cleared");
    $("#application-form__capcha").prev().addClass("application-form__prompt--open");
  }
});

$(".application-form input").keydown(function() {
  $(this).parent().addClass("application-form__label--focus");
  $(this).siblings(".application-form__prompt").addClass("application-form__prompt--open");
});

$(".application-form input").blur(function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass("application-form__label--focus");
    $(this).parent().removeClass("application-form__label--cleared");
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
    $(this).parent().removeClass("application-form__label--cleared");
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

/* Подстановка значений из выпадающего меню в поле формы */

$(".application-form__category-list li").click(function() {
  $("#application-form__category").val($(this).text());
});

$(".application-form__priority-list li").click(function() {
  $("#application-form__priority").val($(this).text());
});

/* Адаптивный контент для мобильных устройств */

$(window).resize(function() {
  if ($(".container").css("width") == "300px") {
    $(".application-form__file-extension").html("(не более 2-х файлов, формата: .gif, .jpg, .png, .zip, .rar, .csv, .doc, .docx, .xls, .xlsx, .txt, .pdf, не более 2 МБ)");
  } else {
    $(".application-form__file-extension").html("(.gif, .jpg, .png, .zip, .rar, .csv, .doc, .docx, .xls, .xlsx, .txt, .pdf, не более 2 МБ)");
  }
});

/* Показать/скрыть блок "Забыли идентификатор" */

$(".forget-id__button").click(function() {
  $(".forget-id").toggleClass("forget-id--open");
  if ($(".application-form--search-id input[name='application-form__send-button']").css("display") == "block") {
    $(".application-form--search-id input[name='application-form__send-button']").css("display", "none");
  } else {
    $(".application-form--search-id input[name='application-form__send-button']").css("display", "block");
  }

  if ($(".forget-id").hasClass("forget-id--open")) {
    $(".article-content--search").css("paddingBottom", "2px");
  } else {
    $(".article-content--search").css("paddingBottom", "27px");
  }

  if (($(".forget-id").hasClass("forget-id--open")) && ($(".container").css("width") == "300px")) {
    $(".application-form--search-id").css("display", "none");
    $(".article-content--search").css("paddingTop", 0);
    $(".article-content--search").css("marginBottom", "125px");
    $(".application-form__send-tickets").css("paddingTop", "2px");
    $(".application-form__tickets label").css("marginBottom", "10px");
    $(".application-form__tickets label[for='application-form__tickets--all']").css("paddingBottom", "5px");
    $("label[for='application-form__tickets--all'] span").css("paddingTop", "10px");
    $(".application-form input[name='application-form__send-button']").css("bottom", "-95px");
  }
});
