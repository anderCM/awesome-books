const ShowHideViews = (idToShow) => {
  const currentShow = document.getElementById(idToShow);
  const allSections = document.querySelectorAll('section');

  allSections.forEach((section) => {
    section.style.display = 'none';
  });

  currentShow.style.display = 'block';
};

export default ShowHideViews;