const learnMoreButtonPath = ".aracomp-button > button:nth-child(1)";

const learnMoreButton = document.querySelector(learnMoreButtonPath);
learnMoreButton.addEventListener("click", function () {
  learnMoreButton.style.backgroundColor = "#7209b7";
  setTimeout(function () {
    learnMoreButton.style.backgroundColor = "#f72585";
  }, 500);
});
