document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const to = "aaracompufal@gmail.com";
  const name = document.getElementById("name-field").value;
  const from = document.getElementById("email-field").value;
  const subject = "CONTATO - ARACOMP";
  const message = document.getElementById("message-field").value;

  const emailBody = `mailto:${encodeURIComponent(
    to,
  )}?cc=${name}&bcc=${from}&subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(message)}`;

  window.location = emailBody;
});
