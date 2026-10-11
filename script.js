$(document).ready(function () {
  $("#consultationForm").on("submit", function (event) {
    event.preventDefault();

    const form = this;
    const message = document.getElementById("formMessage");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    message.textContent = "Cảm ơn bạn! Thông tin đăng ký đã được kiểm tra.";

    message.classList.remove("error");
    message.classList.add("success");

    message.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    form.reset();
  });
});
