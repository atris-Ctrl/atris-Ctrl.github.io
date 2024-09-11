function showTab(category) {
  const tabsButton = document.querySelectorAll('.tab-button');
  const projectContents = document.querySelectorAll('.tab-content');
  projectContents.forEach(content => {
    content.style.display = 'none';
  });
  tabsButton.forEach(content => {
    content.style.backgroundColor = '#8397d6';
    content.style.color = '#292b50';
  });
  const selectedTab = document.getElementById(`${category}-tab`);
  const selectedCategory = document.getElementById(`${category}`);

  selectedTab.style.backgroundColor = '#0c1f47';
  selectedTab.style.color = '#3ec5ba';
  selectedCategory.style.display = 'block';
  selectedCategory.classList.add('animate-fadeIn');

}


function typeText(element, text, delay = 100) {
  let index = 0;
  const interval = setInterval(function () {
    element.textContent += text.charAt(index);
    index++;
    if (index > text.length) {
      clearInterval(interval);
    }
  }, delay);
}

function toggle(parentID) {
  var parent = document.getElementById(parentID);
  console.log("d");
  var child = parent.nextElementSibling;
  if (child.style.display === "none") {
    child.style.display = "block";
  } else {
    child.style.display = "none";
  }
}